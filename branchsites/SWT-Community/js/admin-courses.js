// Date helper used by the admin tabs (admin.html does not load js/app.js)
function formatDate(timestamp) {
    if (!timestamp) return '';
    var date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

// Admin diagnostics banner: shows who is signed in and what Firestore allows
(function () {
    auth.onAuthStateChanged(async function (user) {
        if (!user) return;
        var main = document.querySelector('main');
        if (!main) return;
        var box = document.createElement('div');
        box.style.cssText = 'margin:12px 0;padding:10px 14px;border:1px solid var(--border-color);border-radius:8px;font-size:.85rem;color:var(--text-secondary)';
        box.textContent = 'Checking account...';
        main.insertBefore(box, main.firstChild);
        var parts = ['Signed in as ' + (user.email || 'unknown')];
        try {
            var me = await db.collection('users').doc(user.uid).get();
            parts.push('your user doc: ' + (me.exists ? 'found, role = ' + JSON.stringify(me.data().role || null) : 'NOT FOUND (uid ' + user.uid.slice(0, 6) + '...)'));
        } catch (e) { parts.push('your user doc: ' + (e.code || e.message)); }
        try { var q = await db.collection('questions').get(); parts.push('questions: ' + q.size); } catch (e) { parts.push('questions: ' + (e.code || e.message)); }
        try { var u = await db.collection('users').get(); parts.push('users: ' + u.size); } catch (e) { parts.push('users: ' + (e.code || e.message)); }
        box.textContent = parts.join('  |  ');
    });
})();

// Courses moderation (admin only; Firestore rules enforce this too)
(function () {
    function esc(t) { var d = document.createElement('div'); d.textContent = t || ''; return d.innerHTML; }
    function row(id, c, pending) {
        var link = /^https?:\/\//.test(c.link || '') ? c.link : '#';
        return '<div class="profile-item" style="margin-bottom:12px;padding:12px;border:1px solid var(--border-color);border-radius:10px;">' +
            '<strong>' + esc(c.title) + '</strong> <span style="color:var(--text-muted)">(' + esc(c.category) + ' / ' + esc(c.level) + ')</span>' +
            '<p style="margin:6px 0;">' + esc(c.description) + '</p>' +
            '<p style="margin:6px 0;word-break:break-all;"><a href="' + esc(link) + '" target="_blank" rel="noopener noreferrer nofollow">' + esc(c.link) + '</a></p>' +
            '<small>By ' + esc(c.authorName) + '</small><div style="margin-top:8px;display:flex;gap:8px;">' +
            (pending ? '<button class="btn btn-primary" onclick="courseSetStatus(\'' + id + '\')">Approve</button>' : '') +
            '<button class="btn btn-danger" onclick="courseDelete(\'' + id + '\')">Delete</button></div></div>';
    }
    async function loadCourses() {
        try {
            var pend = await db.collection('courses').where('status', '==', 'pending').get();
            var appr = await db.collection('courses').where('status', '==', 'approved').get();
            document.getElementById('pendingCourses').innerHTML = pend.empty ? '<p>No courses waiting.</p>' : pend.docs.map(function (d) { return row(d.id, d.data(), true); }).join('');
            document.getElementById('approvedCourses').innerHTML = appr.empty ? '<p>No approved courses yet.</p>' : appr.docs.map(function (d) { return row(d.id, d.data(), false); }).join('');
            document.getElementById('pendingBadge').textContent = pend.size ? '(' + pend.size + ')' : '';
        } catch (e) {
            document.getElementById('pendingCourses').innerHTML = '<p>Could not load courses: ' + esc(e.code || e.message) + '</p>';
            document.getElementById('approvedCourses').innerHTML = '';
        }
    }
    window.courseSetStatus = async function (id) {
        try { await db.collection('courses').doc(id).update({ status: 'approved' }); loadCourses(); }
        catch (e) { alert('Error: ' + (e.code || e.message)); }
    };
    window.courseDelete = async function (id) {
        if (!confirm('Delete this course?')) return;
        try { await db.collection('courses').doc(id).delete(); loadCourses(); }
        catch (e) { alert('Error: ' + (e.code || e.message)); }
    };
    auth.onAuthStateChanged(async function (user) {
        if (!user) return;
        var r = await getUserData(user.uid);
        if (r.success && r.userData.role === 'admin') loadCourses();
    });
})();

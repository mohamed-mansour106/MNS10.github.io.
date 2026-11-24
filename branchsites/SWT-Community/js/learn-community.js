// Adds approved community courses to the Digital Courses grid on learn.html
(function () {
    var list = document.getElementById('library-list');
    if (!list || typeof db === 'undefined') return;
    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) e.className = cls;
        if (text) e.textContent = text;
        return e;
    }
    db.collection('courses').where('status', '==', 'approved').get().then(function (snap) {
        var items = snap.docs.map(function (x) { var d = x.data(); d.id = x.id; return d; });
        items.sort(function (a, b) { return ((b.createdAt && b.createdAt.seconds) || 0) - ((a.createdAt && a.createdAt.seconds) || 0); });
        items.forEach(function (d) {
            var href = 'community-courses.html';
            href = 'course-view.html?id=' + encodeURIComponent(d.id);
            var card = el('div', 'library-card');
            card.dataset.type = 'Community';
            card.dataset.title = d.title || '';
            card.dataset.author = d.authorName || '';
            var text = el('div', 'text-div');
            text.appendChild(el('span', '', 'Community'));
            var h = el('h4');
            var ha = el('a', '', d.title || 'Course');
            ha.href = href;
            ha.style.color = 'inherit';
            ha.style.textDecoration = 'none';
            h.appendChild(ha);
            text.appendChild(h);
            text.appendChild(el('p', '', (d.authorName || 'Community member') + (d.level ? ' \u2022 ' + d.level : '')));
            var desc = d.description || '';
            text.appendChild(el('p', '', desc.length > 140 ? desc.slice(0, 137) + '...' : desc));
            var wrap = el('div', 'cat-item position-relative overflow-hidden rounded mb-2');
            var a = el('a', 'cat-overlay text-white text-decoration-none');
            a.href = href;
            var img = el('img', 'img-fluid');
            img.src = CourseUtil.cover(d);
            img.alt = d.title || 'Course cover';
            img.loading = 'lazy';
            img.style.cssText = 'width:100%;aspect-ratio:16/9;object-fit:cover;';
            a.appendChild(img);
            wrap.appendChild(a);
            card.appendChild(text);
            card.appendChild(wrap);
            list.appendChild(card);
        });
        if (typeof filterLibrary === 'function') filterLibrary();
    }).catch(function (e) { console.error('Community courses not loaded', e); });
})();

function shuffleFeed() {
    const feed = document.querySelector(".feed");
    const cards = Array.from(feed.querySelectorAll('.card'));
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    feed.innerHTML = "";
    cards.forEach(card => feed.appendChild(card));
}

// Cloudinary config: will be read from the composer element data attributes
let CLOUDINARY_CLOUD_NAME = ""; // set via data-cloud-name on the composer element
let CLOUDINARY_UPLOAD_PRESET = ""; // set via data-upload-preset on the composer element
let _uploadedImageUrl = "";

function initCloudinaryWidget() {
    if (!window.cloudinary || !CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) return;
    const widget = cloudinary.createUploadWidget({
        cloudName: CLOUDINARY_CLOUD_NAME,
        uploadPreset: CLOUDINARY_UPLOAD_PRESET,
        multiple: false,
        folder: 'user_posts',
        sources: ['local','url','camera','image_search']
    }, (error, result) => {
        if (!error && result && result.event === 'success') {
            _uploadedImageUrl = result.info.secure_url;
            const input = document.getElementById('postImageUrl');
            const preview = document.getElementById('photoPreview');
            if (input) input.value = _uploadedImageUrl;
            if (preview) preview.innerHTML = `<img src="${_uploadedImageUrl}" alt="preview" style="max-width:120px;border-radius:6px"/>`;
        }
    });
    const addPhoto = document.getElementById('addPhotoBtn');
    if (addPhoto) addPhoto.addEventListener('click', () => widget.open(), false);
}

// Utility to escape HTML
function escapeHtml(text) {
    return (text + '').replace(/[&<>\"']/g, function (m) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]; });
}

// Create a card element from post data and prepend to feed
function createCardFromData(post) {
    const article = document.createElement('article');
    article.className = 'card';
    article.dataset.id = post.id;

    const imgHTML = post.imageUrl ? `<img src="${post.imageUrl}" alt="">` : '<img src="" alt="">';
    const bodyHTML = `<div class="card-content">
            <h3>${escapeHtml(post.title)}</h3>
            <div class="card-text">${escapeHtml(post.body)}</div>
        </div>`;

    article.innerHTML = `${imgHTML}${bodyHTML}
        <div class="card-actions">
            <button class="like-btn">Like ❤️</button>
            <span class="like-count"></span>
            <button class="comment-toggle">💬Comment</button>
        </div>
        <div class="comments hidden">
            <div class="comments-list"></div>
            <div class="add-comment">
                <input type="text" placeholder="write comment ....">
                <button class="add-comment-btn">post</button>
            </div>
        </div>`;

    const feed = document.querySelector('.feed');
    // place after any static leading container (like commentsContainer) so it appears like feed posts
    if (feed) feed.insertBefore(article, feed.children[0] || null);
    attachCardHandlers(article);
    return article;
}

function attachCardHandlers(card) {
    if (!card || card.dataset.inited) return;
    card.dataset.inited = 'true';
    const id = card.dataset.id || ('post-' + Date.now());
    card.dataset.id = id;

    // Likes
    const btn = card.querySelector('.like-btn');
    const countEl = card.querySelector('.like-count');
    const likeKey = 'like_' + id;
    const saved = localStorage.getItem(likeKey);
    const baseLikes = saved ? JSON.parse(saved).count : Math.floor(Math.random() * 120) + 10;
    const liked = saved ? JSON.parse(saved).liked : false;
    if (countEl) countEl.textContent = baseLikes;
    if (liked && btn) btn.classList.add('liked');
    if (btn) btn.addEventListener('click', () => {
        const prev = JSON.parse(localStorage.getItem(likeKey) || JSON.stringify({count: baseLikes, liked: !!liked}));
        let data = { count: prev.count, liked: prev.liked };
        if (data.liked) { data.count--; data.liked = false; btn.classList.remove('liked'); }
        else { data.count++; data.liked = true; btn.classList.add('liked'); }
        if (countEl) countEl.textContent = data.count;
        localStorage.setItem(likeKey, JSON.stringify(data));
    });

    // Comments
    const toggleBtn = card.querySelector('.comment-toggle');
    const commentBox = card.querySelector('.comments');
    const list = card.querySelector('.comments-list');
    const input = card.querySelector('.add-comment input');
    const addBtn = card.querySelector('.add-comment-btn');
    const commentsKey = 'comments_' + id;
    const savedComments = JSON.parse(localStorage.getItem(commentsKey)) || [];
    renderComments(list, savedComments);
    if (toggleBtn && commentBox) toggleBtn.addEventListener('click', () => commentBox.classList.toggle('hidden'));
    if (addBtn && input) addBtn.addEventListener('click', () => {
        const text = input.value.trim();
        if (!text) return;
        const comment = { text, time: new Date().toLocaleTimeString() };
        savedComments.unshift(comment);
        localStorage.setItem(commentsKey, JSON.stringify(savedComments));
        renderComments(list, savedComments);
        input.value = '';
    });

    function renderComments(container, comments) {
        if (!container) return;
        container.innerHTML = '';
        comments.forEach(c => {
            const div = document.createElement('div');
            div.className = 'comment';
            div.innerHTML = `<strong>You</strong> <small>${c.time}</small><div>${escapeHtml(c.text)}</div>`;
            container.appendChild(div);
        });
    }
}

function attachHandlersToAllCards() {
    document.querySelectorAll('.card').forEach(card => attachCardHandlers(card));
}

function loadSavedPosts() {
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');
    posts.forEach(post => createCardFromData(post));
}

// Post form
document.addEventListener('DOMContentLoaded', () => {
    // read cloudinary config from composer dataset if present
    const composerEl = document.querySelector('.composer');
    if (composerEl) {
        CLOUDINARY_CLOUD_NAME = composerEl.dataset.cloudName || CLOUDINARY_CLOUD_NAME;
        CLOUDINARY_UPLOAD_PRESET = composerEl.dataset.uploadPreset || CLOUDINARY_UPLOAD_PRESET;
    }
    initCloudinaryWidget();
    loadSavedPosts();
    attachHandlersToAllCards();
    shuffleFeed();

    const form = document.getElementById('postForm');
    if (form) form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('postTitle').value.trim();
        const body = document.getElementById('postBody').value.trim();
        const imageUrl = document.getElementById('postImageUrl').value || '';
        if (!title && !body && !imageUrl) return;
        const post = { id: 'post-' + Date.now(), title, body, imageUrl, created: Date.now() };
        const posts = JSON.parse(localStorage.getItem('posts') || '[]');
        posts.unshift(post);
        localStorage.setItem('posts', JSON.stringify(posts));
        createCardFromData(post);
        form.reset();
        const preview = document.getElementById('photoPreview'); if (preview) preview.innerHTML = '';
    });
});

// keep read-more toggle
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('read-more')) {
        const text = e.target.previousElementSibling;
        text.classList.toggle('expanded');
        e.target.textContent = text.classList.contains('expanded') ? 'read less' : 'read more...';
    }
});

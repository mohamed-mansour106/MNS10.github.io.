// ===========================
// Cloudinary Config
// ===========================

// ===========================
// Cloudinary Config
// ===========================
let CLOUDINARY_CLOUD_NAME = "";
let CLOUDINARY_UPLOAD_PRESET = "";
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

// ===========================
// Cartoon Characters Database
// ===========================

const CARTOON_NAMES = [
    'SpongeBob SquarePants', 'Patrick Star', 'Squidward Tentacles', 'Mr. Krabs',
    'Mickey Mouse', 'Minnie Mouse', 'Donald Duck', 'Goofy',
    'Tom', 'Jerry', 'Bugs Bunny', 'Daffy Duck',
    'Tweety', 'Silvester', 'Porky Pig', 'Elmer Fudd',
    'Scooby Doo', 'Shaggy Rogers', 'Fred Jones', 'Daphne Blake',
    'Homer Simpson', 'Bart Simpson', 'Lisa Simpson', 'Marge Simpson',
    'Stewie Griffin', 'Brian Griffin', 'Peter Griffin', 'Lois Griffin',
    'Bender', 'Fry', 'Leela', 'Professor Farnsworth',
    'Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Jerry Smith',
    'Stan Smith', 'Francine Smith', 'Steve Smith', 'Roger Smith',
    'Finn the Human', 'Jake the Dog', 'Marceline', 'Princess Bubblegum',
    'Goku', 'Vegeta', 'Naruto Uzumaki', 'Sasuke Uchiha',
    'Linus van Pelt', 'Charlie Brown', 'Snoopy', 'Woodstock',
    'Garfield', 'Odie', 'Jon Arbuckle', 'Nermal',
    'Dory', 'Nemo', 'Marlin', 'Bruce the Shark',
    'Simba', 'Nala', 'Mufasa', 'Scar',
    'Elsa', 'Anna', 'Olaf', 'Hans Solo',
    'Woody', 'Buzz Lightyear', 'Rex', 'Hamm',
    'Lightning McQueen', 'Mater', 'Sally', 'Doc Hudson',
    'Toothless', 'Hiccup', 'Astrid', 'Stoick',
    'Shrek', 'Donkey', 'Princess Fiona', 'Puss in Boots',
    'Diego', 'Sid', 'Manny', 'Scrat',
    'Roz', 'Mike Wazowski', 'Sulley', 'Boo',
    'Remy', 'Linguini', 'Colette', 'Chef Skinner',
    'Carl Fredricksen', 'Russell', 'Dug', 'Kevin',
    'Merida', 'Bow', 'Elinor', 'Fergus',
    'Juan', 'Imelda', 'Miguel Rivera', 'Hector',
    'Judy Hopps', 'Nick Wilde', 'Chief Bogo', 'Flash',
    'Ralph', 'Vanellope', 'Felix', 'Sergeant Calhoun',
    'Moana', 'Maui', 'Tamatoa', 'Te Fiti',
    'Po', 'Shifu', 'Tigress', 'Monkey',
    'Vitani', 'Zazu', 'Rafiki', 'Pumbaa',
    'Aurora', 'Philip', 'Flora', 'Fauna',
    'Rapunzel', 'Eugene', 'Mother Gothel', 'Pascal',
    'Ariel', 'Eric', 'Sebastian', 'Flounder',
    'Belle', 'Beast', 'Gaston', 'Mrs. Potts',
    'Cinderella', 'Prince Charming', 'Fairy Godmother', 'Jaq'
];

// ===========================
// Utility Functions
// ===========================

function getRandomCartoonName() {
    return CARTOON_NAMES[Math.floor(Math.random() * CARTOON_NAMES.length)];
}

function getRandomCartoonAvatar() {
    // Use DiceBear API with cartoon style avatars
    const cartoonStyles = ['adventurer', 'avataaars', 'big-ears', 'bottts', 'croodles', 'pixel-art', 'personas'];
    const randomStyle = cartoonStyles[Math.floor(Math.random() * cartoonStyles.length)];
    const seed = Math.random().toString(36).substr(2, 9);
    return `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${seed}`;
}

// Anonymous user helpers
function getAnonymousUser() {
    let userId = localStorage.getItem('anon_user_id');
    let userName = localStorage.getItem('anon_user_name');
    let userAvatar = localStorage.getItem('anon_user_avatar');
    
    if (!userId) {
        userId = 'anon_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('anon_user_id', userId);
    }
    
    if (!userName) {
        // Generate random cartoon name
        userName = getRandomCartoonName();
        localStorage.setItem('anon_user_name', userName);
    }
    
    if (!userAvatar) {
        // Generate random cartoon avatar
        userAvatar = getRandomCartoonAvatar();
        localStorage.setItem('anon_user_avatar', userAvatar);
    }
    
    return {
        uid: userId,
        displayName: userName,
        photoURL: userAvatar
    };
}

function escapeHtml(text) {
    return (text + '').replace(/[&<>\"']/g, function (m) { return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]; });
}

function formatDate(timestamp) {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;
    return date.toLocaleDateString();
}

// ===========================
// Create LinkedIn-Style Card
// ===========================
function createCardFromData(post) {
    const article = document.createElement('article');
    article.className = 'card';
    article.dataset.id = post.id;

    // Author header section
    const anonUser = getAnonymousUser();
    const authorHeader = `
        <div class="post-header">
            <div class="author-info">
                <img src="${escapeHtml(post.authorAvatar)}" alt="${escapeHtml(post.authorName)}" class="avatar-small">
                <div class="author-details">
                    <h4>${escapeHtml(post.authorName || 'Admin')}</h4>
                    <span class="post-time">${formatDate(post.createdAt)}</span>
                </div>
            </div>
            ${post.authorId === anonUser.uid ? `<button class="delete-post-btn" title="Delete post">×</button>` : ''}
        </div>
    `;

    // Post image
    const imgHTML = post.imageUrl ? `<div class="post-image"><img src="${escapeHtml(post.imageUrl)}" alt="post"></div>` : '';

    // Post content
    const contentHTML = `
        <div class="post-content">
            <h3>${escapeHtml(post.title)}</h3>
            <p>${escapeHtml(post.body)}</p>
        </div>
    `;

    // Post stats and actions
    const statsHTML = `
        <div class="post-stats">
            <span class="stat-item"><span class="like-count">0</span> Likes</span>
            <span class="stat-item"><span class="comment-count">0</span> Comments</span>
        </div>
        <div class="post-actions">
            <button class="action-btn like-btn">👍 Like</button>
            <button class="action-btn comment-toggle">💬 Comment</button>
        </div>
    `;

    // Comments section
    const commentsHTML = `
        <div class="comments-section hidden">
            <div class="comments-list"></div>
            <div class="add-comment-section">
                <img src="${escapeHtml(anonUser.photoURL)}" alt="You" class="avatar-comment">
                <div class="comment-input-wrapper">
                    <input type="text" class="add-comment-input" placeholder="Write a comment...">
                    <button class="add-comment-btn">Post</button>
                </div>
            </div>
        </div>
    `;

    article.innerHTML = authorHeader + imgHTML + contentHTML + statsHTML + commentsHTML;

    const feed = document.querySelector('.feed');
    if (feed) feed.insertBefore(article, feed.children[1]); // After composer

    attachCardHandlers(article, post);
    return article;
}

// ===========================
// Attach Card Handlers
// ===========================
function attachCardHandlers(card, post) {
    if (!card || card.dataset.inited) return;
    card.dataset.inited = 'true';
    const postId = post.id;

    // Delete button
    const deleteBtn = card.querySelector('.delete-post-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', async () => {
            if (confirm('Delete this post?')) {
                const result = await deletePost(postId);
                if (result.success) {
                    card.remove();
                }
            }
        });
    }

    // Like button
    const likeBtn = card.querySelector('.like-btn');
    const likeCount = card.querySelector('.like-count');
    if (likeBtn && post.likes !== undefined) {
        likeCount.textContent = post.likes;
        const anonUserForLike = getAnonymousUser();
        if (post.likedBy && post.likedBy.includes(anonUserForLike.uid)) {
            likeBtn.classList.add('liked');
        }
        likeBtn.addEventListener('click', async () => {
            // Like functionality can be added here
        });
    }

    // Comment toggle
    const commentToggle = card.querySelector('.comment-toggle');
    const commentSection = card.querySelector('.comments-section');
    const commentCount = card.querySelector('.comment-count');
    if (commentToggle && commentSection) {
        commentCount.textContent = post.commentCount || 0;
        commentToggle.addEventListener('click', () => {
            commentSection.classList.toggle('hidden');
        });
    }

    // Load and listen for comments
    const commentsList = card.querySelector('.comments-list');
    if (commentsList && typeof getCommentsRealtime === 'function') {
        getCommentsRealtime(postId, (comments) => {
            renderComments(commentsList, comments);
            if (commentCount) commentCount.textContent = comments.length;
        });
    }

    // Add comment
    const addCommentInput = card.querySelector('.add-comment-input');
    const addCommentBtn = card.querySelector('.add-comment-btn');
    if (addCommentBtn && addCommentInput) {
        addCommentBtn.addEventListener('click', async () => {
            const text = addCommentInput.value.trim();
            if (!text) return;
            const result = await addComment(postId, text);
            if (result.success) {
                addCommentInput.value = '';
            }
        });
        addCommentInput.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter') {
                const text = addCommentInput.value.trim();
                if (!text) return;
                const result = await addComment(postId, text);
                if (result.success) {
                    addCommentInput.value = '';
                }
            }
        });
    }
}

// ===========================
// Render Comments
// ===========================
function renderComments(container, comments) {
    if (!container) return;
    container.innerHTML = '';
    const anonUserForComments = getAnonymousUser();
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.className = 'comment-item';
        const deleteBtn = comment.authorId === anonUserForComments.uid ? 
            `<button class="delete-comment-btn" data-comment-id="${comment.id}">×</button>` : '';
        div.innerHTML = `
            <img src="${escapeHtml(comment.authorAvatar)}" alt="${escapeHtml(comment.authorName)}" class="avatar-comment">
            <div class="comment-content">
                <div class="comment-header">
                    <strong>${escapeHtml(comment.authorName)}</strong>
                    <span class="comment-time">${formatDate(comment.createdAt)}</span>
                    ${deleteBtn}
                </div>
                <p>${escapeHtml(comment.text)}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

// ===========================
// Initialize Page
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Load Cloudinary config
    const composerEl = document.querySelector('.composer');
    if (composerEl) {
        CLOUDINARY_CLOUD_NAME = composerEl.dataset.cloudName || CLOUDINARY_CLOUD_NAME;
        CLOUDINARY_UPLOAD_PRESET = composerEl.dataset.uploadPreset || CLOUDINARY_UPLOAD_PRESET;
    }
    initCloudinaryWidget();

    // Load posts from Firestore
    if (typeof getPostsRealtime === 'function') {
        getPostsRealtime((posts) => {
            const feed = document.querySelector('.feed');
            const existingCards = feed.querySelectorAll('.card[data-id]');
            existingCards.forEach(card => {
                // Remove old posts (keep static ones)
                if (!card.dataset.id.startsWith('static-')) {
                    card.remove();
                }
            });
            
            // Add new posts
            posts.forEach(post => {
                if (!feed.querySelector(`[data-id="${post.id}"]`)) {
                    createCardFromData(post);
                }
            });
        });
    }

    // Post form submission
    const form = document.getElementById('postForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const title = document.getElementById('postTitle').value.trim();
            const body = document.getElementById('postBody').value.trim();
            const imageUrl = document.getElementById('postImageUrl').value || '';

            if (!title && !body) {
                alert('Please enter a title or description');
                return;
            }

            const result = await createPost(title, body, imageUrl);
            if (result.success) {
                form.reset();
                const preview = document.getElementById('photoPreview');
                if (preview) preview.innerHTML = '';
                _uploadedImageUrl = '';
            } else {
                alert('Error creating post: ' + (result.error || 'Unknown error'));
            }
        });
    }

    // Read-more toggle
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('read-more')) {
            const text = e.target.previousElementSibling;
            text.classList.toggle('expanded');
            e.target.textContent = text.classList.contains('expanded') ? 'read less' : 'read more...';
        }
    });
});




//-----------------------------------------------//


// =========================
// Posts (News/Articles)
// =========================
async function createPost(title, body, imageUrl = "") {
  const user = getAnonymousUser();

  const data = {
    title,
    body,
    imageUrl,
    authorId: user.uid,
    authorName: user.displayName || "Anonymous User",
    authorAvatar: user.photoURL,
    createdAt: fieldValue.serverTimestamp(),
    updatedAt: fieldValue.serverTimestamp(),
    likes: 0,
    likedBy: [],
    commentCount: 0
  };

  const ref = await firestore.collection("posts").add(data);
  return { success: true, postId: ref.id, post: { id: ref.id, ...data } };
}

function getPostsRealtime(callback) {
  return firestore
    .collection("posts")
    .orderBy("createdAt", "desc")
    .onSnapshot(
      (snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        callback(posts);
      },
      (error) => console.error("Error fetching posts:", error)
    );
}

async function getPostById(postId) {
  const snap = await firestore.collection("posts").doc(postId).get();
  if (!snap.exists) return { success: false, error: "Post not found" };
  return { success: true, post: { id: snap.id, ...snap.data() } };
}

async function deletePost(postId) {
  const user = getAnonymousUser();

  const pRef = firestore.collection("posts").doc(postId);
  const pSnap = await pRef.get();
  if (!pSnap.exists) return { success: false, error: "Post not found" };
  if (pSnap.data().authorId !== user.uid) {
    return { success: false, error: "You can only delete your own posts" };
  }

  // Delete all comments for this post
  const commentsSnap = await firestore
    .collection("posts")
    .doc(postId)
    .collection("comments")
    .get();

  const batch = firestore.batch();
  commentsSnap.forEach((doc) => batch.delete(doc.ref));
  batch.delete(pRef);
  await batch.commit();

  return { success: true };
}

// =========================
// Comments
// =========================
async function addComment(postId, text) {
  const user = getAnonymousUser();

  const commentData = {
    text,
    authorId: user.uid,
    authorName: user.displayName || "Anonymous User",
    authorAvatar: user.photoURL,
    createdAt: fieldValue.serverTimestamp(),
    updatedAt: fieldValue.serverTimestamp()
  };

  const commentRef = await firestore
    .collection("posts")
    .doc(postId)
    .collection("comments")
    .add(commentData);

  // Increment comment count on post
  await firestore
    .collection("posts")
    .doc(postId)
    .update({ commentCount: fieldValue.increment(1) });

  return { success: true, commentId: commentRef.id, comment: { id: commentRef.id, ...commentData } };
}

function getCommentsRealtime(postId, callback) {
  return firestore
    .collection("posts")
    .doc(postId)
    .collection("comments")
    .orderBy("createdAt", "asc")
    .onSnapshot(
      (snapshot) => {
        const comments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        callback(comments);
      },
      (error) => console.error("Error fetching comments:", error)
    );
}

async function deleteComment(postId, commentId) {
  const user = getAnonymousUser();

  const cRef = firestore.collection("posts").doc(postId).collection("comments").doc(commentId);
  const cSnap = await cRef.get();
  if (!cSnap.exists) return { success: false, error: "Comment not found" };
  if (cSnap.data().authorId !== user.uid) {
    return { success: false, error: "You can only delete your own comments" };
  }

  await cRef.delete();
  await firestore
    .collection("posts")
    .doc(postId)
    .update({ commentCount: fieldValue.increment(-1) });

  return { success: true };
}

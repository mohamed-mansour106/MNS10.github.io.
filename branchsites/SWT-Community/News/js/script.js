function shuffleFeed() {
    const feed = document.querySelector(".feed");
    const cards = Array.from(feed.children);
    for (let i = cards.length -1; i>0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j],cards[i]];
    }
    feed.innerHTML = "";
    cards.forEach(card => feed.appendChild(card));
}

window.addEventListener("load",shuffleFeed)

let startY = 0;
document.addEventListener("touchstart", e=> {
    startY = e.touches[0].clientY;
    
} );

document.addEventListener("touchend", e=> {
    const endY = e.changedTouches[0].clientY;
    if (startY -endY > 80) {
        shuffleFeed
    }
} );

/********************************* */
document.querySelectorAll(".card").forEach((card, index) => {
    const btn = card.querySelector(".like-btn");
    const count = card.querySelector(".like-count");

    const saved = localStorage.getItem("like_" + index);
    const baseLikes = saved ? JSON.parse(saved).count : Math.floor(Math.random() * 120) + 10;
    const liked = saved ? JSON.parse(saved).liked : false;
    count.textContent = baseLikes;
    if (liked) btn.classList.add("liked");
    btn.addEventListener("click", () => {
        let data = {
            count: baseLikes,
            liked: btn.classList.contains("liked")
        };
        if (data.liked) {
            data.count--;
            btn.classList.remove("liked");
        } else {
            data.count++;
            btn.classList.add("liked");
        }
        count.textContent = data.count;
        localStorage.setItem("like_" + index, JSON.stringify(data));
    } );
} );

/**************button comment ******************* */
document.querySelectorAll(".card").forEach(card => {
    const id = card.dataset.id;

    const toggleBtn = card.querySelector(".comment-toggle");
    const commentBox = card.querySelector(".comments");
    const list = card.querySelector(".comments-list");
    const input = card.querySelector(".add-comment input");
    const addBtn = card.querySelector(".add-comment-btn");

    const savedComments = JSON.parse(localStorage.getItem("comments_" + id)) || [];
    renderComments(savedComments);
    toggleBtn.addEventListener("click", () => {
        commentBox.classList.toggle("hidden");
    });

    addBtn.addEventListener("click", () => {
        const text = input.value.trim();
        if (!text) return;
        const comment = {
            text,
            time: new Date().toLocaleTimeString()
        };
        savedComments.unshift(comment);
        localStorage.setItem(
            "comments_" + id, JSON.stringify(savedComments)
        );

        renderComments(savedComments);
        input.value = "";
        
    });

    function renderComments(comments) {
        list.innerHTML = "";
        comments.forEach(c => {
            const div = document.createElement("div");
            div.className = "comment";
            div.innerHTML = "<strong>You</strong> <small>" + c.time + "</small><div>" + c.text +" </div>";
            list.appendChild(div);
        });
    }

} );

document.addEventListener("click",function (e) {
    if (e.target.classList.contains("read-more")) {
        const text = e.target.previousElementSibling;
        text.classList.toggle("expanded");
        e.target.textContent = text.classList.contains("expanded")
            ? "read less"
            :"read more...";
    };
});

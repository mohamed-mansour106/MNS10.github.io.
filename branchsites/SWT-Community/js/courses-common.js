// Helpers for Community Courses: cover images and in-site embeds.
// Only YouTube and Vimeo links are embedded, built from parsed IDs (never from raw user URLs).
(function (w) {
    function youtube(link) {
        try {
            var u = new URL(link);
            var h = u.hostname.replace(/^www\./, '').replace(/^m\./, '');
            var id = null;
            var list = u.searchParams.get('list');
            if (h === 'youtu.be') {
                id = u.pathname.slice(1).split('/')[0];
            } else if (h === 'youtube.com' || h === 'music.youtube.com') {
                if (u.pathname === '/watch') {
                    id = u.searchParams.get('v');
                } else {
                    var m = u.pathname.match(/^\/(embed|shorts|live|v)\/([\w-]{6,20})/);
                    if (m) id = m[2];
                }
            } else {
                return null;
            }
            id = id && /^[\w-]{6,20}$/.test(id) ? id : null;
            list = list && /^[\w-]{10,64}$/.test(list) ? list : null;
            if (!id && !list) return null;
            return { id: id, list: list };
        } catch (e) { return null; }
    }
    function vimeo(link) {
        try {
            var u = new URL(link);
            var h = u.hostname.replace(/^www\./, '');
            if (h !== 'vimeo.com') return null;
            var m = u.pathname.match(/^\/(\d{5,12})/);
            return m ? m[1] : null;
        } catch (e) { return null; }
    }
    function embedUrl(link) {
        var y = youtube(link);
        if (y) {
            if (y.id) return 'https://www.youtube-nocookie.com/embed/' + y.id + (y.list ? '?list=' + y.list : '');
            return 'https://www.youtube-nocookie.com/embed/videoseries?list=' + y.list;
        }
        var v = vimeo(link);
        if (v) return 'https://player.vimeo.com/video/' + v;
        return null;
    }
    function placeholder(cat) {
        var t = String(cat || 'Course').replace(/[&<>"']/g, '').slice(0, 30);
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360">' +
            '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1e3a8a"/><stop offset="1" stop-color="#0f172a"/></linearGradient></defs>' +
            '<rect width="640" height="360" fill="url(#g)"/>' +
            '<text x="320" y="185" fill="#cbd5e1" font-family="Arial,sans-serif" font-size="34" text-anchor="middle">' + t + '</text></svg>';
        return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
    }
    function cover(c) {
        if (c && c.cover && /^https:\/\//.test(c.cover)) return c.cover;
        var y = c && youtube(c.link);
        if (y && y.id) return 'https://i.ytimg.com/vi/' + y.id + '/hqdefault.jpg';
        return placeholder(c && c.category);
    }
    w.CourseUtil = { yt: youtube, embedUrl: embedUrl, cover: cover, placeholder: placeholder };
})(window);

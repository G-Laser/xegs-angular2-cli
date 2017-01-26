"use strict";
var Article = (function () {
    function Article(title, pubDate, summary, imgLink, mediaLink, showNotes) {
        this.title = title;
        this.pubDate = pubDate;
        this.summary = summary;
        this.imgLink = imgLink;
        this.mediaLink = mediaLink;
        this.showNotes = showNotes;
    }
    return Article;
});
exports.Article = Article;
//# sourceMappingURL=article.js.map

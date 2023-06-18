class Search {
    constructor(pages) {
        this.pages = pages;
        this.index = window.lunr(function () {
            this.field("title", { boost: 10 });
            this.field("content");
            this.ref("href");
        });
        for (var page of pages) {
            this.index.add(page);
        }
    }
    go(term) {
        return this.index.search(term).map((result) => {
            return this.pages.filter((page) => {
                return page.href == result.ref;
            })[0];
        });
    }
}
class Term {
    static fromQueryString(name) {
        return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(name).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
    }
}
//# sourceMappingURL=search.js.map
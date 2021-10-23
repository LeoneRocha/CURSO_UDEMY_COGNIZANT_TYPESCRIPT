"use strict";
var Blog;
(function (Blog) {
    class Post {
        constructor(post) {
            this.title = post.title;
            this.body = post.body;
        }
        printPost() {
            console.log(this.title);
            console.log(this.body);
        }
    }
    Blog.Post = Post;
})(Blog || (Blog = {}));
var Content;
(function (Content) {
    class Post {
        constructor(post) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeywords = post.seoKeywords;
        }
        printPost() {
            console.log(this.title);
            console.log(this.body);
            console.log(this.slug);
            console.log(this.seoKeywords);
        }
    }
    Content.Post = Post;
})(Content || (Content = {}));
var blogPost = new Blog.Post({
    title: "My Great Post",
    body: "Some content"
});
blogPost.printPost();
var contentPost = new Content.Post({
    title: "My Great Post",
    body: "Some content",
    slug: 'my-great-post',
    seoKeywords: 'any, words'
});
contentPost.printPost();

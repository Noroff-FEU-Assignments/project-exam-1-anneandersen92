import { url } from "./apiUrl.js";
import { displayError } from "../components/errorMessage.js";

const newPost = document.querySelector(".newest-post");
const mostReadPosts = document.querySelector(".featured-slider");
const howToPosts = document.querySelector(".how-to-posts");

async function fetchIndex() {
    const completeUrl = url + "?_embed&per_page=100";

    try {
        const response = await fetch(completeUrl);
        const blog = await response.json();

        newPost.innerHTML = "";
        mostReadPosts.innerHTML = "";
        howToPosts.innerHTML = "";

        for (let i = 0; i < blog.length; i++) {

            const post = blog[i];

            const newTag = 5;
            const mostReadTag = 13;
            const howToCategory = 11;

            if (post.tags[1] === newTag) {
                createNewPostHtml(post);
            };

            if (post.tags[0] === mostReadTag) {
                createMostReadHtml(post);
            };

            if (post.categories[0] === howToCategory) {
                createHowToHtml(post);
            };
        };

        function createNewPostHtml(post) {
            newPost.innerHTML += `
                <a href="blogpost.html?id=${post.id}" style="background-image: url(${post._embedded["wp:featuredmedia"][0].source_url})" alt="${post._embedded["wp:featuredmedia"][0].alt_text}" class="large-post new-post pad-all">
                    <h2 class="text-white-80">New post</h2>
                    <h3 class=" bg-light-beige rounded">${post.title.rendered}</h3>
                </a>`;
        };

        function createMostReadHtml(post) {
            mostReadPosts.innerHTML += `
                <a href="blogpost.html?id=${post.id}" class="featured-card">
                <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
                    <h3 class="bg-dark-green text-white">${post.title.rendered}</h3>
                </a>`;
        };

        function createHowToHtml(post) {
            howToPosts.innerHTML += `
                <a href="blogpost.html?id=${post.id}" class="how-to-card bg-dark-green rounded">
                    <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
                    <h3 class="text-white">${post.title.rendered}</h3>
                </a>`;
        };

    } catch (error) {
        howToPosts.innerHTML = displayError("An error occured when calling the API");
    };
};

fetchIndex();
import { url } from "./apiUrl.js";
import { displayError } from "../components/errorMessage.js";

const largePosts = document.querySelector(".large-posts");
const smallPosts = document.querySelector(".small-posts");
const btnShowMore = document.querySelector(".show-more-btn");

let perPage = 10;

btnShowMore.addEventListener("click", () => {
    perPage += 10;
    fetchBlog();
});

async function fetchBlog() {
    const completeUrl = url + "?_embed&" + `per_page=${perPage}`;

    try {
        const response = await fetch(completeUrl);
        const blog = await response.json();

        largePosts.innerHTML = "";
        smallPosts.innerHTML = "";

        for (let i = 0; i < blog.length; i++) {

            const post = blog[i];

            if (i <= 1) {
                createLargePostsHtml(post);
            } else if (i >= 2) {
                createSmallPostsHtml(post);
            };
        };

        function createLargePostsHtml(post) {
            largePosts.innerHTML += `
                <a href="blogpost.html?id=${post.id}" style="background-image: url(${post._embedded["wp:featuredmedia"][0].source_url}) " alt="${post._embedded["wp:featuredmedia"][0].alt_text}" class="large-post pad-all rounded">
                        <h3 class="bg-light-beige rounded">${post.title.rendered}</h3>
                </a>`;
        };

        function createSmallPostsHtml(post) {
            smallPosts.innerHTML += `
                <a href="blogpost.html?id=${post.id}" style="background-image: url(${post._embedded["wp:featuredmedia"][0].source_url})" alt="${post._embedded["wp:featuredmedia"][0].alt_text}" class="small-post pad-all rounded">
                        <h3 class="bg-light-beige rounded">${post.title.rendered}</h3>
                </a>`;
        };

        if (blog.length < perPage === true) {
            btnShowMore.remove();
        };

    } catch (error) {
        largePosts.innerHTML = displayError("An error occured when calling the API");
        btnShowMore.style.display = "none";
    };
};

fetchBlog();
import { displayError } from "../components/errorMessage.js";

const url = "https://annesflower.no/ohsheet/wp-json/wp/v2/posts/";
const completeUrl = url + "?_embed&per_page=100";

const largePosts = document.querySelector(".large-posts");
const smallPosts = document.querySelector(".small-posts");

async function fetchBlog() {
    try {
        const response = await fetch(completeUrl);
        const blog = await response.json();

        largePosts.innerHTML = "";

        for (let i = 0; i < blog.length; i++) {

            const post = blog[i];

            if (largePosts && (i === 3)) {
                break;
            }

            largePostsHtml(post);
        };

        function largePostsHtml(post) {
            largePosts.innerHTML += `<a href="blogpost.html?id=${post.id}" style="background-image: url(${post._embedded["wp:featuredmedia"][0].source_url});" alt="${post._embedded["wp:featuredmedia"][0].alt_text}" class="small-post pad-all rounded">
                                            <h2 class="text-white-80 justify-r">Post</h2>
                                            <h3 class="bg-light-beige rounded">${post.title.rendered}</h3>
                                    </a>`;
        };

        smallPosts.innerHTML = "";

        for (let i = 3; i < blog.length; i++) {

            const post = blog[i];

            smallPostsHtml(post);
        };

        function smallPostsHtml(post) {
            smallPosts.innerHTML += `<a href="blogpost.html?id=${post.id}" style="background-image: url(${post._embedded["wp:featuredmedia"][0].source_url});" alt="${post._embedded["wp:featuredmedia"][0].alt_text}" class="small-post pad-all rounded">
                                            <h2 class="text-white-80 justify-r">Post</h2>
                                            <h3 class="bg-light-beige rounded">${post.title.rendered}</h3>
                                    </a>`;
        };

    } catch (error) {
        largePosts.innerHTML = displayError("An error occured when calling the API");
        smallPosts.innerHTML = displayError("An error occured when calling the API");
    }
}

fetchBlog();
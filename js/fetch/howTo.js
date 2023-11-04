import { url } from "./apiUrl.js";
import { displayError } from "../components/errorMessage.js";

const howToPosts = document.querySelector(".how-to-posts");

export async function fetchHowTo() {
    const completeUrl = url + "?_embed&per_page=100";

    try {
        const response = await fetch(completeUrl);
        const blog = await response.json();

        howToPosts.innerHTML = "";

        for (let i = 0; i < blog.length; i++) {

            const post = blog[i];

            if (post.categories[0] === 11) {
                createHtml(post);
            }

        };

        function createHtml(post) {
            howToPosts.innerHTML += `
            <a href="blogpost.html?id=${post.id}" class="how-to-card bg-dark-green rounded">
                <img src="${post._embedded["wp:featuredmedia"][0].source_url}" alt="${post._embedded["wp:featuredmedia"][0].alt_text}">
                <h3>${post.title.rendered}</h3>
            </a>`;
        };

    } catch (error) {
        howToPosts.innerHTML = displayError("An error occured when calling the API");
    }
}

fetchHowTo();
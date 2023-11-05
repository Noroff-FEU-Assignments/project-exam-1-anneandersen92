import { url } from "./apiUrl.js";
import { displayError } from "../components/errorMessage.js";

const blogpost = document.querySelector(".blogpost");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");



let perPage = 100;

async function fetchProductDetails() {
    const completeUrl = url + id + "/" + "?_embed&" + `per_page=${perPage}`;

    try {
        const response = await fetch(completeUrl);
        const details = await response.json();

        console.log(details.title.rendered);

        blogpost.innerHTML = "";

        createBlogpostHtml(details);

    } catch (error) {
        blogpost.innerHTML = displayError("An error occured when calling the API");
    }
}

function createBlogpostHtml(details) {
    blogpost.innerHTML = "Hello";
    // `
    // <div class="banner-img">
    //     <img src="${details._embedded["wp:featuredmedia"][0].source_url}" alt="${details._embedded["wp:featuredmedia"][0].alt_text}">
    // </div>
    // <div>
    //     <h1>${post.title.rendered}</h1>
    // </div>
    // <div class="bg-light-beige">
    //     <p class="mgn-text">Text</p>
    //     <p class="mgn-text">Text</p>
    //     <p class="mgn-text">Text</p>
    // </div>
    // <div class="inner-img">
    //     <img src="${details._embedded["wp:featuredmedia"][0].source_url}" alt="${details._embedded["wp:featuredmedia"][0].alt_text}">
    // </div>
    // <div class="bg-light-beige">
    //     <p class="mgn-text">Text</p>
    //     <p class="mgn-text">Text</p>
    //     <ul class="mgn-text">
    //         <li>...</li>
    //         <li>...</li>
    //         <li>...</li>
    //     </ul>
    //     <p class="mgn-text">Text</p>
    //     <p class="mgn-text">Text</p>
    // </div>`;

    const current = document.querySelector(".current");

    current.innerHTML = `${details.title.rendered}`;
    document.title = `OH Sheet ! | ${details.title.rendered}`;
}

fetchProductDetails();



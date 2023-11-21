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

        blogpost.innerHTML = "";

        createBlogpostHtml(details);

    } catch (error) {
        blogpost.innerHTML = displayError("An error occured when calling the API");
    }
}

function createBlogpostHtml(details) {
    const current = document.querySelector(".current");
    current.innerHTML = `${details.title.rendered}`;
    document.title = `OH Sheet ! | ${details.title.rendered}`;

    document.getElementsByTagName('meta')["description"].content = `${details.excerpt.rendered}`;

    blogpost.innerHTML += `
        <div class="banner-img">
            <img class="post-img" src="${details._embedded["wp:featuredmedia"][0].source_url}" alt="${details._embedded["wp:featuredmedia"][0].alt_text}">
        </div>
        <div>
            <h1>${details.title.rendered}</h1>
        </div>
        <div>
            ${details.content.rendered}
        </div>`;

    let innerImg = document.querySelector(".inner-img img");
    innerImg.setAttribute("class", "post-img");
    const images = document.querySelectorAll(".blogpost .post-img");
    let imgSrc;

    // const zoom = document.createElement("img");
    // zoom.src = "../../resources/icons/cross-small.svg";
    // zoom.setAttribute("class", "zoom");
    // document.querySelector(".wp-block-image.size-full").append(zoom);

    images.forEach((img) => {
        img.addEventListener("click", (e) => {
            imgSrc = e.target.src;
            imgModal(imgSrc);
        });
    });

    let imgModal = (src) => {
        const modal = document.createElement("div");
        modal.setAttribute("class", "modal");
        document.querySelector(".blogpost").append(modal);
        const newImage = document.createElement("img");
        newImage.setAttribute("src", src);

        modal.addEventListener("mouseout", function () {
            if (newImage === event.target) {
                modal.style.cursor = "zoom-out";
            } else if (newImage !== event.target) {
                modal.style.cursor = "initial";
            }
        });

        modal.addEventListener("click", function () {
            if (newImage !== event.target) {
                modal.remove();
            }
        });

        modal.append(newImage);
    }
}

fetchProductDetails();
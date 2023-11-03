import { createHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";
import { imgModal } from "./components/imgModal.js";
import { checkButton, submitForm } from "./components/formValidation.js";

// import { displayError } from "./components/errorMessage.js";

const url = "https://annesflower.no/ohsheet/wp-json/wp/v2/posts/";
const completeUrl = url + "?per_page=100";

const largePosts = document.querySelector(".large-posts");
const smallPosts = document.querySelector(".small-posts");

async function fetchProducts() {
    try {
        const response = await fetch(completeUrl);
        const products = await response.json();

        smallPosts.innerHTML = "";

        for (let i = 0; i < products.length; i++) {

            const product = products[i];
        };

        function createHtml(product) {
            smallPosts.innerHTML += `<a href="product.html?id=${product.id}" style="background-image: url(${product._embedded["wp:featuredmedia"][0].source_url});" alt="${product._embedded["wp:featuredmedia"][0].alt_text}" class="small-post pad-all rounded">
                                            <h2 class="text-white-80 justify-r">Post</h2>
                                            <h3 class="bg-light-beige rounded">${product.title.rendered}</h3>
                                    </a>`;
        };

    } catch (error) {
        smallPosts.innerHTML = `<p>An error occured when calling the API</div`;
    }
}

fetchProducts();
const footer = document.querySelector("footer");

document.addEventListener("DOMContentLoaded", () => {
    displayFooter();
});

function displayFooter() {
    createFooter();
};

export function createFooter() {
    footer.classList.add("bg-charcoal");

    footer.innerHTML = footer.innerHTML = `
        <p><a href="blog.html" class="fs-body-small fw-medium text-white">Blog</a></p>
        <p><a href="contact.html" class="fs-body-small fw-medium text-white">Contact</a></p>
        <p><a href="about.html" class="fs-body-small fw-medium text-white">About</a></p>
        <p class="fs-body-small fw-medium text-white">#ohsheet</p>
        <div class="socials">
            <img src="resources/icons/instagram.svg" alt="instagram logo" class="instagram">
            <img src="resources/icons/facebook.svg" alt="facebook logo" class="facebook">
        </div>`
};
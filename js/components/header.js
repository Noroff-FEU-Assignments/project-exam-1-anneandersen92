const header = document.querySelector("header");

document.addEventListener("DOMContentLoaded", () => {
    displayHeader();
});

function displayHeader() {
    createHeader();
};

export function createHeader() {
    header.classList.add("bg-light-beige");

    header.innerHTML = header.innerHTML = `
        <div class="header-content">
            <a href="index.html" class="blog-logo" aria-label="blog logo">
                <p class="blog-name" aria-label="blog name">OH Sheet !</p>
                <p class="tagline" aria-label="tagline">Time to go to bed</p>
            </a>
            <div class="navigation">
                <label for="nav-dots"><img src="resources/icons/nav.svg" aria-label="button to open and close the navigation" class="nav-btn"></label>
                <input type="checkbox" id="nav-dots" />
                <nav class="bg-medium-beige-90">
                    <div class="nav-items">
                        <a href="blog.html">Blog</a>
                        <a href="contact.html">Contact</a>
                        <a href="about.html">About</a>
                        <a href="index.html" class="home">Home</a>
                    </div>
                </nav>
            </div>
        </div>`;
};
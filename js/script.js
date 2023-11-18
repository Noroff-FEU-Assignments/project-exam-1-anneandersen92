import { createHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";

// const zoom = document.createElement("img");
// zoom.src = "../../resources/icons/cross-small.svg";
// zoom.setAttribute("class", "zoom");
// document.querySelector(".wp-block-image.size-full").append(zoom);


const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = `<img class="back-to-top-img" src="../resources/icons/angle-small-down.svg" aria-label="button to scroll directly back to the top">`;
backToTopBtn.setAttribute("class", "back-to-top-btn");
document.body.append(backToTopBtn);

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
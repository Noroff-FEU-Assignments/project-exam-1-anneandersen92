import { createHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";

// const zoom = document.createElement("img");
// zoom.src = "../../resources/icons/cross-small.svg";
// zoom.setAttribute("class", "zoom");
// document.querySelector(".wp-block-image.size-full").append(zoom);


const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerHTML = `<img class="scroll-to-top-img" src="../resources/icons/angle-small-down.svg" aria-label="button to scroll directly back to the top">`;
scrollToTopBtn.setAttribute("class", "scroll-to-top-btn");
document.body.append(scrollToTopBtn);

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
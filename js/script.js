import { createHeader } from "./components/header.js";
import { createFooter } from "./components/footer.js";

const images = document.querySelectorAll(".blogpost img");
let imgSrc;
// get images src onclick
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        //run modal function
        imgModal(imgSrc);
    });
});
//creating the modal
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the main section or the parent element
    document.querySelector(".blogpost").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);

    const closeBtn = document.createElement("img");
    closeBtn.src = "resources/icons/cross-small.svg";
    closeBtn.setAttribute("class", "close-btn")
    closeBtn.onclick = () => {
        modal.remove();
    };

    modal.append(newImage, closeBtn);
};


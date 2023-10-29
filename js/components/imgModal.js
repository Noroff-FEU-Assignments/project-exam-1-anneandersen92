const images = document.querySelectorAll(".img-modal img");
let imgSrc;

images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc);
    });
});

export let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".img-modal").append(modal);
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
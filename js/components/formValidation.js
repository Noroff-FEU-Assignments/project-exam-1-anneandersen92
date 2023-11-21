const form = document.querySelector(".contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const formButton = document.querySelector(".submit-btn");
const responseMessage = document.querySelector("#response-message");

function checkName() {
    if (checkLength(name.value, 5)) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    };
};

function checkEmail() {
    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    };
};

function checkSubject() {
    if (checkLength(subject.value, 15)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    };
};

function checkMessage() {
    if (checkLength(message.value, 25)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    };
}

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    };
};

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

export function checkButton(event) {
    event.preventDefault;

    if (checkLength(name.value, 5) && validateEmail(email.value) && checkLength(subject.value, 15) && checkLength(message.value, 25)) {
        formButton.disabled = false;
    } else {
        formButton.disabled = true;
    };
};

export function submitForm(event) {
    event.preventDefault();

    if (checkLength(name.value, 5) && validateEmail(email.value) && checkLength(subject.value, 15) && checkLength(message.value, 25)) {
        responseMessage.innerHTML = '<div class="response-message rounded"><p class="fw-medium">Thank you !</p><p>I will get back to you as soon as possible</p></div>';
        form.reset();
    };
};

name.addEventListener("keyup", checkName);
email.addEventListener("keyup", checkEmail);
subject.addEventListener("keyup", checkSubject);
message.addEventListener("keyup", checkMessage);
form.addEventListener("keyup", checkButton);
form.addEventListener("submit", submitForm);
const wrapper = document.querySelector(".wrapper")
const qrInput = wrapper.querySelector(".form input")
const generateBtn = wrapper.querySelector(".form button")
const qrImage = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerHTML = "Generating QR Code...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImage.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerHTML = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});
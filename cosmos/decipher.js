//const CryptoJS = require('crypto-js');

const searchParams = new URLSearchParams(window.location.search);
const key = searchParams.get("key");

function decipher(content) {
    let container = document.getElementById("my-container");
    const decrypted = CryptoJS.AES.decrypt(content, key)
    container.innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
}
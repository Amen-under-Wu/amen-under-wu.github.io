const searchParams = new URLSearchParams(window.location.search);
const key = searchParams.get("key");
function jump_to(coordinate) {
    let key = "key";
    if (non_secret_coordinate.indexOf(coordinate) === -1) {
        coordinate = CryptoJS.SHA256(coordinate);
        key = CryptoJS.SHA256(coordinate + "salty key");
    }
    let path = window.location.origin;
    path += `/cosmos/${coordinate}.html?key=${key}`;
    window.location.href = path;
    return false;
}
function try_template() {
    if (typeof custom_template === "undefined") {
        document.head.innerHTML += `
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="biupiukiu_like.css" rel="stylesheet"/>
        `;
        let template_str = `<div class="w3-top">
  <div class="w3-bar w3-black w3-card">
    <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
    <a href="javascript: window.location.href = window.location.origin + '/index.html'" class="w3-bar-item w3-button w3-padding-large" target="_self">AuW</a>
    <a href="#" class="w3-bar-item w3-button w3-padding-large w3-hide-small" target="_self">正在</a>
    <a href="#" class="w3-bar-item w3-button w3-padding-large w3-hide-small" target="_self">装修</a>
    <a href="#" class="w3-bar-item w3-button w3-padding-large w3-hide-small" target="_self">敬请</a>
    <a href="#" class="w3-bar-item w3-button w3-padding-large w3-hide-small" target="_self">期待</a>
  </div>
</div>
<div class="w3-content" style="max-width:2000px;margin-top:46px">
  <div class="w3-container w3-content w3-center w3-padding-32" style="max-width:800px" id="my-container">
  </div>
</div>`;
        document.body.innerHTML = template_str;
    }
}

function decipher(content) {
    try_template();
    let container = document.getElementById("my-container");
    const decrypted = CryptoJS.AES.decrypt(content, key)
    container.innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
}
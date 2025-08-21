const searchParams = new URLSearchParams(window.location.search);
const key = searchParams.get("key");
const non_secret_coordinate = ["EightCharPage", "ghostvalley", "medic"];
function jump_to(coordinate) {
    let key = "key";
    if (non_secret_coordinate.indexOf(coordinate) === -1) {
        key = CryptoJS.SHA256(coordinate + "salty key");
        coordinate = CryptoJS.SHA256(coordinate);
    }
    let path = window.location.origin;
    path += `/cosmos/${coordinate}.html?key=${key}`;
    window.location.href = path;
    return false;
}
function try_template() {
    if (typeof custom_template === "undefined") {
        let orig_content = document.getElementById("orig-content");
        document.head.innerHTML += `
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
  <div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px">
  <a href="#" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">正在</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">装修</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">敬请</a>
  <a href="#" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">期待</a>
</div>
</div>
<div class="w3-content" style="max-width:2000px;margin-top:46px">
  <div class="w3-container w3-content w3-center w3-padding-32" style="max-width:800px" id="my-container">
  </div>
</div>`;
        document.body.innerHTML = template_str + '<script src="bpk.js"></script>';
        if (orig_content !== null) {
            document.getElementById("my-container").appendChild(orig_content);
        }
    }
}

function decipher(content) {
    try_template();
    let container = document.getElementById("my-container");
    const decrypted = CryptoJS.AES.decrypt(content, key)
    container.innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
}
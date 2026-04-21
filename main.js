let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (!mybutton) {
        return;
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function menuFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function useBpk(content) {
    document.querySelector("head").innerHTML += `
        <link rel="stylesheet" href="/style/bpk.css">
        <link rel="stylesheet" href="/style/w3.css">
        <link rel="stylesheet" href="https://unpkg.com/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    `;
    document.querySelector("#main-content").outerHTML = `<div class="w3-top">
            <div class="w3-bar w3-black w3-card">
                <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
                   href="javascript:void(0)" onclick="menuFunction()" title="Toggle Navigation Menu"><i
                        class="fa fa-bars"></i></a>
                <a href="/index.html" class="w3-bar-item w3-button w3-padding-large">AuW</a>
                <a href="/cx/index.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small" target="_self">程序</a>
                <a href="/sb/index.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small" target="_self">随笔</a>
                <a href="/xf/index.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small" target="_self">想法</a>
                <a href="/ll/index.html" class="w3-bar-item w3-button w3-padding-large w3-hide-small" target="_self">联络</a>
            </div>
        </div>

        <div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style="margin-top:46px">
            <a href="cx/index.html" class="w3-bar-item w3-button w3-padding-large" onclick="menuFunction()">程序</a>
            <a href="sb/index.html" class="w3-bar-item w3-button w3-padding-large" onclick="menuFunction()">随笔</a>
            <a href="xf/index.html" class="w3-bar-item w3-button w3-padding-large" onclick="menuFunction()">想法</a>
            <a href="ll/index.html" class="w3-bar-item w3-button w3-padding-large" onclick="menuFunction()">联络</a>
        </div>

        <!-- Page content -->
        <div id="main-content" class="w3-container w3-content w3-center w3-padding-32" style="max-width:800px;margin-top:56px">
        ${content}
        </div>`;
}

function useTemplate(template_name) {
    let content = document.querySelector("#main-content").innerHTML;
    if (template_name === "biupiukiu") {
        useBpk(content);
    }
    else if (template_name === "markdown") {
        content = marked.parse(content);
        useBpk(content);
        document.getElementById("main-content").id = "md-box";
        let main_header = document.getElementsByTagName("h2")[0]
        main_header.classList.add("w3-wide")
        document.title = main_header.innerHTML + " | Amen-under-Wu";
    }
}

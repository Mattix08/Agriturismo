function nav(e, color, colore) {
    var x = document.querySelector("#primo");
    x.style.backgroundColor = color;
}

var bcNav = document
    .querySelector("#a")
    .addEventListener("mouseover", function (e) {
        // nav(e, "#ffffff");
        nav(e, "#6b6b6b");
    });
var bcNav = document
    .querySelector("#a")
    .addEventListener("mouseout", function (e) {
        nav(e, "#35424bff");
    });

function nava(e, color) {
    var x = document.querySelector("#secondo");
    x.style.backgroundColor = color;
}

var bcNav = document
    .querySelector("#aa")
    .addEventListener("mouseover", function (e) {
        // nava(e, "#ffffff");
        nava(e, "#6b6b6b");
    });
var bcNav = document
    .querySelector("#aa")
    .addEventListener("mouseout", function (e) {
        nava(e, "#35424bff");
    });

function navaa(e, color) {
    var x = document.querySelector("#terzo");
    x.style.backgroundColor = color;
}

var bcNav = document
    .querySelector("#aaa")
    .addEventListener("mouseover", function (e) {
        // navaa(e, "#ffffff");
        navaa(e, "#6b6b6b");
    });
var bcNav = document
    .querySelector("#aaa")
    .addEventListener("mouseout", function (e) {
        navaa(e, "#35424bff");
    });

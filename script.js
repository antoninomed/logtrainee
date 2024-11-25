fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
    });

function onMenuClick() {
    var navbar = document.getElementById("navigation-bar");
    var responsive_class_name = "responsive";

    navbar.classList.toggle(responsive_class_name);
}

function inicio(){
    window.location.href = "index.html";

}

function clickabout(){
    window.location.href = "sobre.html";

}



// scripts.js

// Obtenha o modal
var modal = document.getElementById("loginModal");

// Obtenha o botão que abre o modal
var btn = document.getElementById("openModalBtn");

// Obtenha o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
function clickmodal() {
    modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
function closemodal() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

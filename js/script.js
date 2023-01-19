"use strict";
//Navbar
const nav = document.querySelector('.navbar');
window.onscroll = () => {
    if (window.scrollY > 150) {
        nav.classList.remove("bg-transparent");
        nav.classList.add("bg-dark")
        nav.classList.remove("py-3");
    }else{
        nav.classList.remove("bg-dark")
        nav.classList.add("bg-transparent");
        nav.classList.add("py-3");
        
    }
};

// dark mode

const darkBtn = document.getElementById("darkmode");
darkBtn.addEventListener("click", function() {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        
    });

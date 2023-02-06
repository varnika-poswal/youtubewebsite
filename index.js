const mobile_nav=document.querySelector("mobile-navbar-btn");
const nav_hidden=document.querySelector(".header");


const toggleNavbar=()=> {
    nav_header.classlist.toggle("active");

};
mobile_nav.addEventListener("click",()=>toggleNavbar);

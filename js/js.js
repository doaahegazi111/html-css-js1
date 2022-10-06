let bars=document.getElementById("bars");
let links=document.querySelector(".links");
let searchInput=document.querySelector(".search-input");
let search=document.getElementById("search");
let close=document.getElementById("close");
let user=document.getElementById("user");
let login=document.querySelector(".login");
let vidSlider=document.getElementById("vid-slider");
let vidBtn=document.querySelectorAll(".vid-btn");
bars.addEventListener("click",()=>{
    links.classList.toggle("active");
    searchInput.classList.remove("active");
    login.classList.remove("active");
});
search.addEventListener("click",()=>{
    searchInput.classList.toggle("active");
    links.classList.remove("active");
    search.classList.toggle("fa-times");
    login.classList.remove("active");
});
user.addEventListener("click",()=>{
    login.classList.add("active");
    searchInput.classList.remove("active");
    links.classList.remove("active");
})
close.addEventListener("click",()=>{
    login.classList.remove("active");
});
vidBtn.forEach(item=>{
    item.addEventListener("click",()=>{
        vidBtn.forEach(ele=>{
            ele.classList.remove("move")
        })
        item.classList.add("move");
        let src=item.getAttribute("data-src");
        document.getElementById("vid-slider").src=src;
    })
})
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".brand", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});
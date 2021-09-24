const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav_right");


    burger.addEventListener("click", () => {
        nav.classList.toggle("nav_active");
        
        // burger.classList.toggle("cross");
    });
}
navSlide();
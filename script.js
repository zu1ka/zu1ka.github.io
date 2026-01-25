

const openBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");
const mainMenu = document.querySelector("main")


openBtn.addEventListener("click", () => {
    sidebar.classList.remove("hidden", "close");
    sidebar.classList.add("open");
});


closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    sidebar.classList.add("close");


    sidebar.addEventListener("animationend", () => {
        sidebar.classList.remove("close");
        sidebar.classList.add("hidden");
    }, { once: true });
});


mainMenu.addEventListener("click", () => {
    sidebar.classList.remove("open");
    sidebar.classList.add("close");


    sidebar.addEventListener("animationend", () => {
        sidebar.classList.remove("close");
        sidebar.classList.add("hidden");
    }, { once: true });
})



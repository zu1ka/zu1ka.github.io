
const openBtn = document.querySelector(".open-menu");
const closeBtn = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar a");

function openSidebar() {
    sidebar.classList.remove("hidden", "close");
    sidebar.classList.add("open");
}

function closeSidebar() {
    sidebar.classList.remove("open");
    sidebar.classList.add("close");
    sidebar.addEventListener("animationend", () => {
        sidebar.classList.remove("close");
        sidebar.classList.add("hidden");
    }, { once: true });
}

openBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);

sidebarLinks.forEach(link => {
    link.addEventListener("click", closeSidebar);
});


document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !openBtn.contains(e.target) && sidebar.classList.contains("open")) {
        closeSidebar();
    }
});


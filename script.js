const container = document.getElementById("container");

document.querySelectorAll(".showDetail").forEach(btn => {
    btn.addEventListener("click", () => {
        container.classList.add("right-panel-active");
    });
});

document.querySelectorAll(".showBio").forEach(btn => {
    btn.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
    });
});

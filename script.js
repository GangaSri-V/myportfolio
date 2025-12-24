document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".hidden");

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < window.innerHeight - 250) {
                section.classList.add("show");
            }
        });
    });
});

function toggleBox(box) {
    box.classList.toggle("active");
}
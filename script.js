document.addEventListener("DOMContentLoaded", function () {
    const projectButton = document.querySelector("button");
    const projectSection = document.getElementById("projects");

    function checkScroll() {
        const rect = projectSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
            projectSection.classList.remove("hidden");
        }
    }

    projectButton.addEventListener("click", function () {
        projectSection.classList.remove("hidden");
        projectSection.scrollIntoView({ behavior: "smooth" });
    });

    window.addEventListener("scroll", checkScroll);
});

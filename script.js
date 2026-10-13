// DIGITAL VISION TECHNOLOGIES

// 1. Display the current year
const yearElement = document.getElementById("year");

if (yearElement) {
yearElement.textContent = new Date().getFullYear();
}

// 2. Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
link.addEventListener("click", function (event) {
const targetId = this.getAttribute("href");

```
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
});
```

});

// 3. Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
menuToggle.addEventListener("click", function () {
const isOpen = navLinks.classList.toggle("show");

```
    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
});
```

}

// 4. Back to Top button
const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
window.addEventListener("scroll", function () {
backToTopButton.style.display =
window.scrollY > 300 ? "block" : "none";
});

```
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
```

}

// 5. Confirm that the website is running
console.log("Digital Vision Technologies website is running successfully!");

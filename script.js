// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Navigation Toggle
const nav = document.querySelector("nav ul");
const toggleBtn = document.createElement("button");
toggleBtn.innerHTML = "☰";
toggleBtn.classList.add("nav-toggle");
document.querySelector("nav").prepend(toggleBtn);

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (name === "" || email === "" || message === "") {
        e.preventDefault();
        alert("Please fill in all fields.");
    } else if (!validateEmail(email)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

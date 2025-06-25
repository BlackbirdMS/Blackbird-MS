// Hamburger menu toggle
[cite_start]const mobileMenuButton = document.getElementById('mobile-menu-button'); [cite: 70]
[cite_start]const mobileMenu = document.getElementById('mobile-menu'); [cite: 71]
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    [cite_start]}); [cite: 71]
[cite_start]} [cite: 72]

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        [cite_start]}); [cite: 73]
    });
[cite_start]}); [cite: 73]

// Set current year in footer
[cite_start]document.getElementById('currentYear').textContent = new Date().getFullYear(); [cite: 74]

// AJAX Form Submission
[cite_start]const contactForm = document.getElementById('contactForm'); [cite: 75]
[cite_start]const formMessage = document.getElementById('formMessage'); [cite: 75]
[cite_start]if(contactForm) { [cite: 76]
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        fetch(form.action, {
            [cite_start]method: form.method, [cite: 77]
            [cite_start]body: formData, [cite: 77]
            [cite_start]headers: {'Accept': 'application/json'} [cite: 77]
        }).then(response => {
            if (response.ok) {
                [cite_start]formMessage.innerHTML = '<p class="text-green-500 font-semibold">Thank you for your inquiry! We will be in touch soon.</p>'; [cite: 78]
                form.reset();
            } else {
                [cite_start]response.json().then(data => { [cite: 78]
                    [cite_start]if (Object.hasOwn(data, 'errors')) { [cite: 79]
                        [cite_start]formMessage.innerHTML = data["errors"].map(error => error["message"]).join(", "); [cite: 79]
                    } else {
                        [cite_start]formMessage.innerHTML = '<p class="text-red-500 font-semibold">An error occurred. [cite: 80] [cite_start]Please try again.</p>'; [cite: 81]
                    }
                })
            }
        }).catch(error => {
            formMessage.innerHTML = '<p class="text-red-500 font-semibold">An error occurred. Please try again.</p>';
        [cite_start]}); [cite: 82]
    });
}

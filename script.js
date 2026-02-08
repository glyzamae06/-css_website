const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle ("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

<script>
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    status.innerHTML = "Sending message...";
    
    const data = new FormData(form);

    await fetch("https://formsubmit.co/ajax/YOURGMAIL@gmail.com", {
        method: "POST",
        body: data
    })
    .then(response => response.json())
    .then(data => {
        status.innerHTML = "✅ Message sent successfully!";
        form.reset();
    })
    .catch(error => {
        status.innerHTML = "❌ Failed to send. Try again.";
    });
});
</script>

const params = new URLSearchParams(window.location.search);
const successBox = document.getElementById("successMessage");

if (params.get("sent") === "1") {
    successBox.classList.add("show");

    setTimeout(() => {
        successBox.classList.remove("show");
    }, 4000);

    // remove ?sent=1 from URL
    window.history.replaceState({}, document.title, window.location.pathname);
}



window.addEventListener("DOMContentLoaded", () => {
    const agePopup = document.getElementById("age-popup");

    if (!localStorage.getItem("ageVerified")) {
        agePopup.style.display = "flex"; // Only show if not verified
    }
});

function verifyAge(isOfAge) {
    const popup = document.getElementById("age-popup");
    const heading = popup.querySelector("h2");

    if (isOfAge) {
        localStorage.setItem("ageVerified", "true");
        popup.style.display = "none";
    } else {
        
        heading.textContent = "Are you sure you are under 18?";
    }
}


//
//alert("You must be 18 or older to use this site.");
//window.location.href = "https://www.google.com"; // or redirect elsewhere
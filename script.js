document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const formData = new FormData(this);

   
    const email = formData.get("email");
    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    let emailBody = "You have a new message from your website:\n\n";
    for (const [name, value] of formData.entries()) {
        emailBody += `${name}: ${value}\n`;
    }

   
    const emailLink = "mailto:mzawarshah296@gmail.com?subject=New Message From Website&body=" + encodeURIComponent(emailBody);
    window.location.href = emailLink;
});


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function toggleNav() {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function() {
    const teamGrid = document.querySelector('.team-grid');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    const cardWidth = 410; 

    nextButton.addEventListener('click', function() {
        teamGrid.scrollLeft += cardWidth;
    });

    prevButton.addEventListener('click', function() {
        teamGrid.scrollLeft -= cardWidth;
    });
});

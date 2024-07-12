// script.js

// Add event listener to hero section button
document.querySelector('.hero-container button').addEventListener('click', function() {
    // Scroll to about section
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

// Add event listener to navigation links
document.querySelectorAll('header nav a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();

        // Get the target section
        const target = document.querySelector(link.getAttribute('href'));

        // Scroll to the target section
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to contact form submit button
document.querySelector('#contact button').addEventListener('click', function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Get the form data
    const formData = new FormData(document.querySelector('#contact form'));

    // Send the form data to the server (e.g. using AJAX or Fetch API)
    fetch('/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
});
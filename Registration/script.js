// // Toggle dropdown functionality for smaller screens
// const dropdowns = document.querySelectorAll('.triggerDrop');

// dropdowns.addEventListener('click', function () {
//     this.style.display === 'block' ? 'none' : 'block';
// })


const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


document.getElementById('registerForm').onsubmit = function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get the current origin and path dynamically
    const baseUrl = window.location.origin;
    const path = window.location.pathname.split('/').slice(0, -2).join('/');
    
    // Redirect to the assessment page with the correct base URL
    window.location.href = `${baseUrl}${path}/dashboard/index.html`;
};


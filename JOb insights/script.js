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


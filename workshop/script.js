function filterEvents(type) {
    const events = document.querySelectorAll('.event-card');

    events.forEach(event => {
        if (type === 'all') {
            event.style.display = 'block';
        } else {
            if (event.classList.contains(type)) {
                event.style.display = 'block';
            } else {
                event.style.display = 'none';
            }
        }
    });
}



const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
    getLatestSong();
});

const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('main-content');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
    sidebar.classList.toggle('w-full');
    sidebar.classList.toggle('mr-4');
    mainContent.classList.toggle('hidden');
});

closeButton.addEventListener('click', () => {
    sidebar.classList.add('hidden');
    sidebar.classList.remove('w-full');
    sidebar.classList.remove('mr-4');
    mainContent.classList.remove('hidden');
});
const sidebar = document.querySelector('.sidebar');
const btn = document.querySelectorAll('button');

btn.forEach(elem => {elem.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active')
})})
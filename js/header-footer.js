const header = document.querySelector("#header");

fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
        header.innerHTML = data;
        init();
    });


const footer = document.querySelector("#footer");

fetch("footer.html")
    .then((res) => res.text())
    .then((data) => (footer.innerHTML = data));


function init() {
    const toggleBtn = document.querySelector('.navbar-toggleBtn');
    const menu = document.querySelector('.navbar-menu');
    const icons = document.querySelector('.navbar-icons');
    
    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        icons.classList.toggle('active');
    });
}


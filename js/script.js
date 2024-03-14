const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY > 70);
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
}


document.getElementById('#link-1').addEventListener('click', function() {
    location.href = 'https://github.com/quochuy-02052001/leagueoflegend.github.io'
}, false);
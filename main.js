// variables
let nav = document.getElementById('nav-');

function menus(){
    let des_actual = window.pageYOffset;

    if(des_actual <= 250){
        nav.classList.remove = 'nav-2';
        nav.className = 'nav';
        nav.style.transition = '1s';
    }
    else{
        nav.className = 'nav nav-2';
        nav.style.transition = '1s';
    }
}

window.addEventListener('scroll',function(){
    menus();
    
});

window.addEventListener('click',function(e){
    console.log(e.target);
});


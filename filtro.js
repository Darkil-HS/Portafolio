
$(function () {
    let perfil = $('#datos').offset().top,
    proyectos = $('#proyectos').offset().top,
    estudios = $('#estudios').offset().top,
    contacto = $('#contacto').offset().top;

    window.addEventListener('resize', function(){
        let perfil = $('#datos').offset().top,
        proyectos = $('#proyectos').offset().top - 70,
        estudios = $('#estudios').offset().top + 90,
        contacto = $('#contacto').offset().top;
    });

    $('#e-perfil').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });

    $('#e-proyectos').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: proyectos-50
        },600);
    });

    $('#e-estudios').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: estudios-130
        },600);
    });

    $('#e-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto-50
        },600);
    });

    console.log(perfil);
    console.log(proyectos);
    console.log(estudios);
    console.log(contacto);

    
});
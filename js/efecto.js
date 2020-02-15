var $elie = $("#aura");

$('#e-perfil').click(function(){
    rotate(0);
    function rotate(degree) {
        // For webkit browsers: e.g. Chrome
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
        // For Mozilla browser: e.g. Firefox
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});

        if(degree < 360){
            // Animate rotation with a recursive call
            setTimeout(function() { rotate(++degree); });
           
        }
    }
});

$('#e-proyectos').click(function(){
    rotate(0);
    function rotate(degree) {
        // For webkit browsers: e.g. Chrome
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
        // For Mozilla browser: e.g. Firefox
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});

        if(degree < 360){
            // Animate rotation with a recursive call
            setTimeout(function() { rotate(++degree); });
        }
    }
});

$('#e-estudios').click(function(){
    rotate(0);
    function rotate(degree) {
        // For webkit browsers: e.g. Chrome
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
        // For Mozilla browser: e.g. Firefox
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});

        if(degree < 360){
            // Animate rotation with a recursive call
            setTimeout(function() { rotate(++degree); });
        }
    }
});

$('#e-contacto').click(function(){
    rotate(0);
    function rotate(degree) {
        // For webkit browsers: e.g. Chrome
        $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
        // For Mozilla browser: e.g. Firefox
        $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});

        if(degree < 360){
            // Animate rotation with a recursive call
            setTimeout(function() { rotate(++degree); });
        }
    }
});
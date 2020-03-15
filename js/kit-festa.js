(function($) {

    "use strict";

    $( ".goMassas" ).click(function() {
        var el = document.querySelector("#massas");
        window.scroll({top: el.offsetTop, behavior: 'smooth'});
    });

})(jQuery);

(function($) {
    $(document).ready(function() {
        $('.menu-toggle').click(function() {
            $('#top-nav').toggleClass('closed').toggleClass('open');
            $('body').toggleClass('menu-open');
            $('#top-nav a').first().focus();
        });

        $('header').click(function(e){
            $target = $(e.target);
            if ($target.is("header")) {
                // close navigation
                if ($('body').hasClass('menu-open')) {
                    $('#top-nav').toggleClass('open').toggleClass('closed');
                    $('body').removeClass('menu-open');
                }
            }
            if ($target.is( "#top-nav ul, #top-nav li" )) {
                // close navigation
                if ($('body').hasClass('menu-open')) {
                    $('#top-nav').toggleClass('open').toggleClass('closed');
                    $('body').removeClass('menu-open');
                }
            }
        });
    });
})(jQuery)

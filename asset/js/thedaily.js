(function($) {
    $(document).ready(function() {
        $('.menu-toggle').click(function() {
            $('#top-nav').toggleClass('closed').toggleClass('open');
            $('body').toggleClass('menu-open');
            $('#top-nav a').first().focus();
        });

        $('html').click(function(e){
            $target = $(e.target);
            if (!$target.is("#top-nav ul, #top-nav li a, .menu-toggle")) {
                // close navigation
                if ($('body').hasClass('menu-open')) {
                    $('#top-nav').removeClass('open').addClass('closed');
                    $('body').removeClass('menu-open');
                }
            }
        });
    });
})(jQuery)

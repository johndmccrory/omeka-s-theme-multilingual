(function($) {
    $(document).ready(function() {
        $('.menu-toggle').click(function() {
            $('#top-nav').toggleClass('closed').toggleClass('open');
            $('body').toggleClass('menu-open');
            $('#top-nav a').first().focus();
        });
        
        $('.search-toggle').click(function() {
            $('#search-container').toggleClass('closed').focus();
        });

        $('html').click(function(e){
            $target = $(e.target);
            if (!$target.is("#top-nav ul, #top-nav li a, #search-form button, #search-form input, .menu-toggle, .search-toggle")) {
                // close navigation
                if ($('body').hasClass('menu-open')) {
                    $('#top-nav').removeClass('open').addClass('closed');
                    $('body').removeClass('menu-open');
                }
                
                // close search
                $('#search-container').addClass('closed');
            }
        });
    });
})(jQuery)

(function($) {
    $(document).ready(function() {
        $('.menu-toggle').click(function() {
            $('#top-nav').toggleClass('closed').toggleClass('open');
            $('body').toggleClass('menu-open');
            $('#top-nav a').first().focus();
        });
        
        $('.search-toggle').click(function() {
            $('#search-container').toggleClass('closed');
            $('#search-container input').focus();
        });
        
        $('#switcher-toggle').click(function() {
            $('.language-switcher').toggleClass('closed');
        });

        $('html').click(function(e){
            target = $(e.target);
            if (!target.is("#top-nav ul, #top-nav li a, #search-form button, #search-form input, .language-switcher a, .menu-toggle, .search-toggle, #switcher-toggle")) {
                // close navigation
                if ($('body').hasClass('menu-open')) {
                    $('#top-nav').removeClass('open').addClass('closed');
                    $('body').removeClass('menu-open');
                }
                
                // close search and language switcher
                $('#search-container, .language-switcher').addClass('closed');
            }
        });
    });
})(jQuery)

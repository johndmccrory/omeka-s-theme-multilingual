(function($) {
    $(document).ready(function() {
        const toggleAttr = (i, attr) => {
            return attr == 'true' ? 'false' : 'true';
        };
        
        $('.menu-toggle').click(function() {
            $(this).attr('aria-expanded', toggleAttr);
            $('#top-nav').toggleClass('closed').toggleClass('open');
            $('body').toggleClass('menu-open');
            $('#top-nav a').first().focus();
        });
        
        $('.search-toggle').click(function() {
            if ($('.jumbotron-search').length > 0) {
                $('.jumbotron-search input[type="text"]').focus();
            } else {
                $(this).attr('aria-expanded', toggleAttr);
                $('#search-container').toggleClass('closed');
                $('#search-container input').focus();
            }
        });
        
        $('#switcher-toggle').click(function() {
            $(this).attr('aria-expanded', toggleAttr);
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
                $('.search-toggle, #switcher-toggle').attr('aria-expanded', 'false');
            }
        });
    });
})(jQuery)

var nav_titel = '';
var nav_index = null;


$('.my_nav_first_a').each(function(index, ele) {
    $(this).click(function() {
        nav_titel = $(this).text();
        nav_index = index;
        $('.my_nav_first_a').css('color', '#999')
        $('.my_nav_first_a').eq(index).css('color', '#29A57C')
        $('.drop-down-content').css('display', 'none');
        if ($(this).parent().find('.drop-down-content').length > 0) {
            if ($('.drop-down-content').eq(index).css('display') == 'none') {
                $('.drop-down-content').eq(index).css('display', 'block');
            } else {
                $('.drop-down-content').eq(index).css('display', 'none');
            }
        } else {
            $('.my_style_menu_titel').find('span').eq(0).text(nav_titel);
            $('.my_style_menu_titel').find('span').eq(1).text('');
        }

    })
})

$('.drop-down-content').find('li').each(function(index, ele) {
    $(this).click(function() {
        $('.drop-down-content').eq(nav_index).css('display', 'none');
        $('.my_style_menu_titel').find('span').eq(0).text(nav_titel);
        $('.my_style_menu_titel').find('span').eq(1).text($(this).text());
    })
})
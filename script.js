$(document).ready(function(){
    $('#options').addClass('active');
    $('.jsHint').show();
    $('.toggle li').click(function(){
        $('.playingCards').toggleClass($(this).text());
    });
    $('.lang li').click(function(){
        $('html').attr('lang', $(this).text());
        $('html').attr('xml:lang', $(this).text());
    });
    $('#cards').tabs();
});

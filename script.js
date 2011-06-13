$(document).ready(function(){
    // show hint only useful when JS is enabled
    $('.jsHint').show();

    // set class for options to style differently if JS is enabled
    $('#options').addClass('active');

    var cards = $('.playingCards');

    // toggle options on and off
    $('.toggle li').click(function(){
        var thisObj   = $(this);
        var optionCur = thisObj.text();

        // if option is exclusive, remove other exclusive options
        switch (optionCur) {
            case 'faceImages':
                removeOption('simpleCards');
                removeOption('inText');
                break;
            case 'simpleCards':
                removeOption('faceImages');
                removeOption('inText');
                break;
            case 'inText':
                removeOption('faceImages');
                removeOption('simpleCards');
                break;
            default:
                break;
        }

        cards.toggleClass(optionCur);
        thisObj.toggleClass('active');
    });

    var removeOption = function(option) {
        $('.toggle li').each(function(){
            var thisObj   = $(this);
            var optionCur = thisObj.text();
            if (optionCur==option){
                thisObj.removeClass('active');
                cards.removeClass(option);
            }
        });
    };

    // set different document language
    $('.lang li').click(function(){
        var thisObj = $(this);
        var lang    = thisObj.text();

        $('html').attr('lang', lang);
        $('html').attr('xml:lang', lang);

        thisObj.siblings().removeClass('active');
        thisObj.addClass('active');

    });

    // initiate jQueryUI tabs
    $('#cards').tabs();
});

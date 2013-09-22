//
// Main.js file for vctrfrnndz.com
// Author: Víctor Fernández
//

$(document).ready(function() {

    function formatDates() {
        $('time.date').each(function() {
            var date = $(this),
                dateString = date.text(),
                dateFormat;

            dateFormat = moment(dateString).fromNow();
            date.text('About ' + dateFormat).addClass('rendered');
        });
    };

    function setColor() {
        var targetElem = $('body'),
            bgColors = ['green', 'orange', 'purple', 'blue'],
            colorIndex = Math.floor(Math.random() * bgColors.length);

        targetElem.addClass(bgColors[colorIndex]);
    };

    function menuToggler() {
        var menuBtn = $('.toggle-menu'),
            menuElem = $('nav.menu');

        menuBtn.on('touchstart click', function(e) {
            e.stopPropagation();
            e.preventDefault();

            menuBtn.toggleClass('is-active');
            menuElem.toggleClass('open');
        });
    }

    menuToggler();
    formatDates();
    setColor();
});
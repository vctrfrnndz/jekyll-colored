//
// Main.js file for vctrfrnndz.com
// Author: Victor Fernandez
//

$(document).ready(function() {

    var breakpoint = function(screenSize) {
        var breakpoints = {
            'small': 0,
            'medium': 768,
            'large': 1200
        };

        return breakpoints[screenSize];
    }

    function getViewportSize() {
        var size = $(window).width();

        return size;
    }

    function formatDates() {
        $('time.date').each(function() {
            var date = $(this),
                dateString = date.text(),
                dateFormat;

            dateFormat = moment(dateString).fromNow();
            date.text('About ' + dateFormat).addClass('rendered');
        });
    };

    function setColor(element) {
        var targetElem = element || $('body'),
            bgColors = ['green', 'orange', 'purple', 'blue'],
            colorIndex = Math.floor(Math.random() * bgColors.length);

        targetElem.addClass(bgColors[colorIndex]);
    };

    function menuToggler() {
        var menuBtn = $('.toggle-menu'),
            menuElem = $('nav.menu'),
            menuState = localStorage.getItem('menuState');

        if(menuState === 'open' && getViewportSize() > breakpoint('medium')) {
            menuElem.addClass('open');
            menuBtn.addClass('is-active');
        }

        menuBtn.on('touchstart click', function(e) {
            e.stopPropagation();
            e.preventDefault();

            menuBtn.toggleClass('is-active');
            menuElem.toggleClass('open');

            if (menuElem.hasClass('open')) {
                localStorage.setItem('menuState','open');
            }
            else {
                localStorage.setItem('menuState','closed');
            }
        });
    }

    function getPictures() {
        var photoGrid = $('#photogrid');

        if(photoGrid.length > 0) {
            var instaFeed = new Instafeed({
                    target: 'photogrid',
                    get: 'user',
                    userId: 250272140,
                    accessToken: '250272140.467ede5.ece4e4b3b3754a639a3e681ad8ddab07',
                    resolution: 'standard_resolution',
                    template: '<a class="item" href="{{link}}"><img src="{{image}}" /></a>'
                });

            instaFeed.run();
        } 
    }

    setColor();
    getPictures();
    menuToggler();
    formatDates();
});
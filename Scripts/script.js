/* EXPERIENCE section hovering effects */
/* Fill experience section circles with orange color when hovering */

var expContent = $('.content-container');


$(expContent).hover(function () {
    $(this).find('circle').css({
        fill: "rgb(219, 150, 30)"
    })
}, function () {
    $(this).find('circle').css({
        fill: "white"
    })

}).click(function () {
    //to be added on click event
    //    $(this).find('.details').show();

});

/* END */


/* Document waypoints */
/* Change menu text color to blend with background */

//var itemText = $(".top-nav ul li a");
//
//var waypoint1 = new Waypoint({
//    element: document.getElementById('homeID'),
//    handler: function () {
//        $(itemText).css({
//            "color": "white"
//        })
//    }
//})
//var waypoint2 = new Waypoint({
//    element: document.getElementById('aboutID'),
//    handler: function () {
//        $(itemText).css("color", "black");
//        $(itemHover).css("background-color", "green");
//    }
//})
//var waypoint3 = new Waypoint({
//    element: document.getElementById('portfolioID'),
//    handler: function () {
//        $(menu).css("color", "green");
//    }
//})
//var waypoint4 = new Waypoint({
//    element: document.getElementById('skillsID'),
//    handler: function () {
//        $(menu).css("color", "aqua");
//    }
//})

var aboutScroll = $('#aboutID'); // "About" section
var portfolioScroll = $('#portfolioID'); // "Portfolio" section
var skillsScroll = $('#skillsID'); // "Skills" section
var topMenuItem = $(".top-nav ul li a"); //Top menu links
var topMenuBottomLine = $(".nav-hr"); //Top menu hr
var sideNavText = $('.left-side-nav-text'); //Left side menu

$(aboutScroll).waypoint(function (direction) {
    if (direction === 'down') {
        $(topMenuItem).css("color", "black");
        $(topMenuBottomLine).css("border-color", "black");
    } else {
        $(topMenuItem).css("color", "#FFFFFF");
        $(topMenuBottomLine).css("border-color", "#FFFFFF");
    }
});

$(portfolioScroll).waypoint(function (direction) {
    if (direction === 'down') {
        $(topMenuItem).css("color", "#FFFFFF");
        $(topMenuBottomLine).css("border-color", "#FFFFFF");
    } else {
        $(topMenuItem).css("color", "black");
        $(topMenuBottomLine).css("border-color", "black");
    }
});

$(skillsScroll).waypoint(function (direction) {
    if (direction === 'down') {
        $(topMenuItem).css("color", "black");
        $(topMenuBottomLine).css("border-color", "black");
    } else {
        $(topMenuItem).css("color", "#FFFFFF");
        $(topMenuBottomLine).css("border-color", "#FFFFFF");
    }
}, {
    offset: '5%' //fix waypoint position
});


/* END Waypoints*/

/* Smooth Scrolling Animation when clicking top menu links*/

$(topMenuItem).click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});

/* END Smooth Scrolling Animation */
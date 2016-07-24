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

var aboutScroll = $('#aboutID');
var portfolioScroll = $('#portfolioID');
var skillsScroll = $('#skillsID');
var topMenuItem = $(".top-nav ul li a");
var topMenuBottomLine = $(".nav-hr");
var sideNavText = $('.left-side-nav-text');

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
});
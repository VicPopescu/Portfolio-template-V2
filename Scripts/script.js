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
    //to do: click events
});

/* END */

/* EXPERIENCE onclick() events*/


var toBeReplaced = $('.experience-description-container div');

$('#SSC').click(function () {
    $(toBeReplaced).hide();
    $('.SSC-2009-descript').show();
});
$('#HSC').click(function () {
    $(toBeReplaced).hide();
    $('.HSC-2011-descript').show();
});
$('#Present').click(function () {
    $(toBeReplaced).hide();
    $('.Present-descript').show();
});
$('#Adobe').click(function () {
    $(toBeReplaced).hide();
    $('.Adobe-descript').show();
});
$('#Microsoft').click(function () {
    $(toBeReplaced).hide();
    $('.Microsoft-descript').show();
});
$('#Endava').click(function () {
    $(toBeReplaced).hide();
    $('.Endava-descript').show();
});

/* END */

/* Document waypoints */
/* Change menu text color to blend with background */

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

$(portfolioScroll)
    .waypoint(function (direction) {
        if (direction === 'down') {
            $(topMenuItem).css("color", "#FFFFFF");
            $(topMenuBottomLine).css("border-color", "#FFFFFF");
        } else {
            $(topMenuItem).css("color", "black");
            $(topMenuBottomLine).css("border-color", "black");
        }
    });

$(skillsScroll)
    .waypoint(function (direction) {
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

$(topMenuItem)
    .click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 400);
                return false;
            }
        }
    });

/* END Smooth Scrolling Animation */
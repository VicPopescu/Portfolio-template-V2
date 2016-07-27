/* Document waypoints */
/* Change menu text color to blend with background */

//Waypoints:
var homeWaypoint = $('#homeID'); // "Home" section
var aboutWaypoint = $('#aboutID'); // "About" section
var portfolioWaypoint = $('#portfolioID'); // "Portfolio" section 
var skillsWaypoint = $('#skillsID'); // "Skills" section
var expWaypoint = $('#experienceID'); // "Experience" section
var contactWaypoint = $('#contactID'); // "Contact" section
//Top Menu items:
var topMenuLinks = $(".top-nav ul li a"); // Top menu links
var topMenuLi = $(".top-nav ul li");
var topMenuBottomLine = $(".nav-hr"); // Top menu hr

/*Left Nav items*/
//Left side menu bullets:
var leftNavHomeDot = $("#home-circle");
var leftNavAboutDot = $("#about-circle");
var leftNavPortfolioDot = $("#portfolio-circle");
var leftNavSkillsDot = $("#skills-circle");
var leftNavExpDot = $("#exp-circle");
var leftNavContactDot = $("#contact-circle");
//Left side menu text:
var leftNavHomeText = $("#home-text");
var leftNavAboutText = $("#about-text");
var leftNavPortfolioText = $("#portfolio-text");
var leftNavSkillsText = $("#skills-text");
var leftNavExpText = $("#exp-text");
var leftNavContactText = $("#contact-text");





$(homeWaypoint)
    .waypoint(function (direction) {
        if (direction === 'down') {
            /* left menu */
            $(leftNavHomeDot).attr('r', '4');
            //        $("#home-circle").css('r', '4');
            $(leftNavHomeText).attr({
                x: '-300'
            });

        } else {
            /* left menu */
            //        $("#home-circle").css('r', '6');
            $(leftNavHomeDot).attr('r', '6');
            $(leftNavHomeText).attr({
                x: '30',
                fill: "white"
            });
        }
    }, {
        offset: '-50%'
    });

$(aboutWaypoint)
    .waypoint(function (direction) {
        if (direction === 'down') {
            /* top menu */
            $(topMenuLinks).css("color", "white");
            //            $(topMenuBottomLine).css("border-color", "black");
            $(topMenuLi).hover(function () {
                $(this).css({
                    //                    'background-color': 'rgba(255, 255, 255, 0.5)',
                    //                    'transition': '350ms ease-in-out'
                })
            }, function () {
                $(this).css('background-color', 'inherit');
            });
            $('.top-nav').css('background-color', 'rgba(0, 0, 0, 0.5)')
            $('.nav-hr').hide('500');
            /* left menu */
            //        $("#about-circle").css('r', '6');
            $(leftNavAboutDot).attr('r', '6');
            $(leftNavAboutText).attr({
                x: '30',
                fill: 'black'
            });
        } else {
            /* top menu */
            $(topMenuLinks).css("color", "#FFFFFF");
            $(topMenuBottomLine).css("border-color", "#FFFFFF");
            $('.top-nav').css('background-color', 'inherit');
            $('.nav-hr').show('500');
            /* left menu */
            //        $("#about-circle").css('r', '4');
            $(leftNavAboutDot).attr('r', '4');
            $(leftNavAboutText).attr({
                x: '-300'
            });
            $(topMenuLi).hover(function () {
                $(this).css("background-color", "inherit")
            });
        }
    });

$(portfolioWaypoint)
    .waypoint(function (direction) {
        if (direction === 'down') {
            /* top menu */
            $(topMenuLinks).css("color", "white");
            //            $(topMenuBottomLine).css("border-color", "#FFFFFF");
            $(topMenuLi).hover(function () {
                $(this).css("background-color", "inherit")
            });
            $('.top-nav').css('background-color', 'rgba(0, 0, 0, 0.5)');
            /* left menu */
            //            $("#portfolio-circle").css('r', '6');
            //            $("#about-circle").css('r', '4');
            $(leftNavPortfolioDot).attr('r', '6');
            $(leftNavAboutDot).attr('r', '4');
            $(leftNavPortfolioText).attr({
                x: '30',
                fill: 'white'
            });
            $(leftNavAboutText).attr({
                x: '-300'
            });
        } else {
            /* top menu */
            $(topMenuLinks).css("color", "white");
            //            $(topMenuBottomLine).css("border-color", "black");
            $(topMenuLi).hover(function () {
                $(this).css('background-color', 'rgba(0, 0, 0, 0.2)')
            }, function () {
                $(this).css('background-color', 'inherit');
            });
            $('.top-nav').css('background-color', 'rgba(0, 0, 0, 0.5)')
                /* left menu */
                //            $("#portfolio-circle").css('r', '4');
                //            $("#about-circle").css('r', '6');
            $(leftNavPortfolioDot).attr('r', '4');
            $(leftNavAboutDot).attr('r', '6');
            $(leftNavPortfolioText).attr({
                x: '-300'
            });
            $(leftNavAboutText).attr({
                x: '30',
                fill: 'black'
            });
        }
    });

$(skillsWaypoint)
    .waypoint(function (direction) {
        if (direction === 'down') {
            /* top menu */
            $(topMenuLinks).css('color', 'white');
            //            $(topMenuBottomLine).css('border-color', 'black');
            $(topMenuLi).hover(function () {
                $(this).css({
                    'background-color': 'rgba(0, 0, 0, 0.2)'
                })
            }, function () {
                $(this).css({
                    'background-color': "inherit"
                })
            });
            $('.top-nav').css('background-color', 'rgba(0, 0, 0, 0.5)');
            /* left menu */
            //            $("#skills-circle").css('r', '6');
            //            $("#portfolio-circle").css('r', '4');
            $(leftNavSkillsDot).attr('r', '6');
            $(leftNavPortfolioDot).attr('r', '4');
            $(leftNavSkillsText).attr({
                x: '30',
                fill: 'black'
            });
            $(leftNavPortfolioText).attr({
                x: '-300'
            });
        } else {
            /* top menu */
            $(topMenuLinks).css("color", "white");
            //            $(topMenuBottomLine).css("border-color", "#FFFFFF");
            $(topMenuLi).hover(function () {
                $(this).css("background-color", "inherit")
            });
            $('.top-nav').css('background-color', 'rgba(0, 0, 0, 0.5)');
            /* left menu */
            //            $("#skills-circle").css('r', '4');
            //            $("#portfolio-circle").css('r', '6');
            $(leftNavSkillsDot).attr('r', '4');
            $(leftNavPortfolioDot).attr('r', '6');
            $(leftNavSkillsText).attr({
                x: '-300'
            });
            $(leftNavPortfolioText).attr({
                x: '30',
                fill: 'white'
            });
        }
    }, {
        offset: '5%' //fix waypoint position
    });

$(expWaypoint)
    .waypoint(function (direction) {
        if (direction === 'down') {
            /* left menu */
            //            $("#skills-circle").css('r', '4');
            //            $("#exp-circle").css('r', '6');
            $(leftNavSkillsDot).attr('r', '4');
            $(leftNavExpDot).attr('r', '6');
            $(leftNavSkillsText).attr({
                x: '-300'
            });
            $(leftNavExpText).attr({
                x: '30',
                fill: 'black'
            });
        } else {
            /* left menu */
            //            $("#exp-circle").css('r', '4');
            //            $("#skills-circle").css('r', '6');
            $(leftNavExpDot).attr('r', '4');
            $(leftNavSkillsDot).attr('r', '6');
            $(leftNavExpText).attr({
                x: '-300'
            });
            $(leftNavSkillsText).attr({
                x: '30',
                fill: 'black'
            });
        }
    }, {
        offset: '20%' //fix waypoint position
    });

$(contactWaypoint)
    .waypoint(function (direction) {
        if (direction === 'down') {
            /* left menu */
            //            $("#contact-circle").css('r', '6');
            //            $("#exp-circle").css('r', '4');
            $(leftNavContactDot).attr('r', '6');
            $(leftNavExpDot).attr('r', '4');
            $(leftNavContactText).attr({
                x: '30',
                fill: 'black'
            });
            $(leftNavExpText).attr({
                x: '-300'
            });
        } else {
            /* left menu */
            //            $("#contact-circle").css('r', '4');
            //            $("#exp-circle").css('r', '6');
            $(leftNavContactDot).attr('r', '4');
            $(leftNavExpDot).attr('r', '6');
            $(leftNavContactText).attr({
                x: '-300'
            });
            $(leftNavExpText).attr({
                x: '30',
                fill: 'black'
            });
        }
    }, {
        offset: '30%' //fix waypoint position
    });

/* END Waypoints*/


/* EXPERIENCE section hovering effects */
/* Fill experience section circles with orange color when hovering */

var expContent = $('.content-container'); //list elements


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

/* !!!TO CACHE WAYPOINTS SO DONT HAVE TO REPEAT THEM */


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


/* Smooth Scrolling Animation when clicking top menu links*/

$(topMenuLinks)
    .click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 300);
                return false;
            }
        }
    });

/* END Smooth Scrolling Animation */
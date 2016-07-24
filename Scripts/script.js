/* EXPERIENCE section hovering effects */

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

});


/*
var waypoint1 = new Waypoint({
    element: document.getElementById('homeID'),
    handler: function () {
        $(".top-nav ul li a").css("color", "white");
    }
})
var waypoint2 = new Waypoint({
    element: document.getElementById('aboutID'),
    handler: function () {
        $(".top-nav ul li a").css("color", "gray");
    }
})
var waypoint3 = new Waypoint({
    element: document.getElementById('portfolioID'),
    handler: function () {
        $(".top-nav ul li a").css("color", "green");
    }
})
var waypoint4 = new Waypoint({
    element: document.getElementById('skillsID'),
    handler: function () {
        $(".top-nav ul li a").css("color", "aqua");
    }
})
*/
// * === NAVIGATION === *

// Navigation CLICK function
$(".open-overlay").click(function () {
    // Definition of elemts in the navigation
    let nav_item_1 = $("nav li:nth-of-type(1)"),
        nav_item_2 = $("nav li:nth-of-type(2)"),
        nav_item_3 = $("nav li:nth-of-type(3)"),
        nav_item_4 = $("nav li:nth-of-type(4)"),
        top_bar = $(".bar-top"),
        middle_bar = $(".bar-middle"),
        bottom_bar = $(".bar-bottom"),
        border_menu = $(".open-overlay");

    // Toggle class overlay-active
    overlay_navigation.toggleClass("overlay-active");

    // Check if overlay has class active
    if (overlay_navigation.hasClass("overlay-active")) {
        // Remove and add classes for animation
        top_bar.removeClass("animate-out-top-bar").addClass("animate-top-bar");
        middle_bar
            .removeClass("animate-out-middle-bar")
            .addClass("animate-middle-bar");
        bottom_bar
            .removeClass("animate-out-bottom-bar")
            .addClass("animate-bottom-bar");
        overlay_navigation
            .removeClass("overlay-slide-up")
            .addClass("overlay-slide-down");
        nav_item_1
            .removeClass("slide-in-nav-item-reverse")
            .addClass("slide-in-nav-item");
        nav_item_2
            .removeClass("slide-in-nav-item-delay-1-reverse")
            .addClass("slide-in-nav-item-delay-1");
        nav_item_3
            .removeClass("slide-in-nav-item-delay-2-reverse")
            .addClass("slide-in-nav-item-delay-2");
        nav_item_4
            .removeClass("slide-in-nav-item-delay-3-reverse")
            .addClass("slide-in-nav-item-delay-3");
        border_menu.removeClass("burger-closed").addClass("burger-opened");

        // When menu active disable scrolling, return to top to find menu
        document.body.style.position = "fixed";
        document.body.style.top = `-${window.scrollY}px`;
    } else {
        // Remove and add classes for animation
        top_bar.removeClass("animate-top-bar").addClass("animate-out-top-bar");
        middle_bar
            .removeClass("animate-middle-bar")
            .addClass("animate-out-middle-bar");
        bottom_bar
            .removeClass("animate-bottom-bar")
            .addClass("animate-out-bottom-bar");
        overlay_navigation
            .removeClass("overlay-slide-down")
            .addClass("overlay-slide-up");
        nav_item_1
            .removeClass("slide-in-nav-item")
            .addClass("slide-in-nav-item-reverse");
        nav_item_2
            .removeClass("slide-in-nav-item-delay-1")
            .addClass("slide-in-nav-item-delay-1-reverse");
        nav_item_3
            .removeClass("slide-in-nav-item-delay-2")
            .addClass("slide-in-nav-item-delay-2-reverse");
        nav_item_4
            .removeClass("slide-in-nav-item-delay-3")
            .addClass("slide-in-nav-item-delay-3-reverse");
        border_menu.removeClass("burger-opened").addClass("burger-closed");

        // When menu inactive enable scrolling
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
});

// Close menu overlay once clicked on an a-link in the navigation
$("nav ul li a").on("click", function () {
    $(".open-overlay").trigger("click");
});

// Check if burgermenu position is half of the HOME SECTION fade-in-out
$(window).scroll(function () {
    // Check if scrolled amount is above half the Home-Section
    if ($(window).scrollTop() > workSection - 625) {
        // Let burger menu disappear
        $(".open-overlay").fadeOut(200);
    } else {
        // Let burger menu appear
        $(".open-overlay").fadeIn(1);
    }
});

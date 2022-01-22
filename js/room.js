$(document).ready(function() {
    // $("nav ul li a").click(function() {
    //     $(this).addClass("active ").parent().siblings().find("a").removeClass("active ");
    //     $(this).parent().addClass("underline").siblings().removeClass("underline")
    // })

    // adjust for resize window

    $(window).resize(function() {
        $("header").height($(this).height());
        $("header").width($(this).width());
    });

    $("nav ul li a").click(function(e) {
        e.preventDefault();
        $(this).parent().addClass("active").siblings().removeClass("active");
        $("html ,body").animate({
                scrollTop: $($(this).data("custom")).offset().top + 1,
            },
            1000
        );
    });
    // ajust for nav fak

    $(window).scroll(function() {
        if ($(this).scrollTop() > 20) {
            $(" header nav").addClass("navfake");
        } else {
            $(" header nav").removeClass("navfake");
        }
        // for icon in header
        // end of fake nav
        // adjust for smoth travlsing

        $(".block").each(function() {
            var winscroll = $(window).scrollTop(),
                blockset = $(this).offset().top,
                attrblock = $(this).attr("id");
            if (winscroll > blockset) {
                $("nav ul li ").removeClass("active");
                $(" nav ul li a[data-custom='#" + attrblock + "']")
                    .parent()
                    .addClass("active");
            }
        });
        // for icon in header
        if ($(this).scrollTop() >= 1000) {
            $("header .first ").attr("style", "display:block !important");
        } else {
            $("header .first").attr("style", "display:none !important");
        }
    });
});
// click icon 
$("header .first").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
            scrollTop: "0",
        },
        2000
    );
})
$("header .second").click(function(e) {
    e.preventDefault();
    $("html,body").animate({
            scrollTop: $("section:first-of-type").offset().top + 1

        },
        2000
    );
});


// adjust for smothy scroll
$("nav ul li a").click(function(e) {
    e.preventDefault();
    $(this).parent().addClass("active").siblings().removeClass("active");
    $("html ,body").animate({
            scrollTop: $($(this).data("custom")).offset().top + 1,
        },
        1000
    );
});
// adjust for about us
$("#about .container>div .item1 i").click(function(e) {
    e.preventDefault();
    $(this).parent().parent().next().slideToggle();
    $(" #about .container>div .item1 .willscale").toggleClass("scale");
    $("#about .container>div .item1 .willchange").toggleClass("change");
});
$("#about .container>div .item3 i").click(function(e) {
    e.preventDefault();
    $(this).parent().parent().next().slideToggle();
    $(" #about .container>div .item3 .willscale").toggleClass("scale");
    $("#about .container>div .item3 .willchange").toggleClass("change");
});

$("#about .container>div .item5 i").click(function(e) {
    e.preventDefault();
    $("#about .container>div .item5")
        .next()
        .slideToggle(true, function() {
            $(" #about .container>div .item5 .willscale").toggleClass("scale");
            $(" #about .container>div .item5 .willchange").toggleClass("change");
        });
});
// adjust
// // for our service

$("#service .container div i").mouseover(function() {
    $(this).parent().css({ color: "#F28A23" });
    $("#service .container div p").css({ color: "#575757" });
});
$("#service .container div i").mouseleave(function() {
    $(this).parent().css({ color: "#575757" });
});
//adjust in blog
$("#blog .container>div >i ").click(function() {
    $(this).toggleClass("blogslide");
    $(this).prev().slideToggle(1000);
});
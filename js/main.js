
//count
setInterval(function () {
    secondPlay()
}, 10000);
setInterval(function () {
    minutePlay()
}, 100000);
function secondPlay() {
$("body").removeClass("play");
var aa = $("ul.secondPlay li.active");
if (aa.html() == undefined) {
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
}
else if (aa.is(":last-child")) {
    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("active")
        .closest("body")
        .addClass("play");
}
else {
    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
}
};
function minutePlay() {
$("body").removeClass("play");
var aa = $("ul.minutePlay li.active");
if (aa.html() == undefined) {
    aa = $("ul.minutePlay li").eq(0);
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
}
else if (aa.is(":last-child")) {
    $("ul.minutePlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.minutePlay li").eq(0);
    aa.addClass("active")
        .closest("body")
        .addClass("play");
}
else {
    $("ul.minutePlay li").removeClass("before");
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
    };
};




function random(max) {
    return Math.floor(Math.random() * (max + 1));
}
$(function() {
    var idx = random(backArray.length - 1);
    $.backstretch(backRoot + backArray[idx]);
    console.log("Background: " + backRoot + backArray[idx]);
    $("nav[role=banner]").headroom({
        offset  : 10,
        onNotTop: function() {
            $("nav[role=banner]").stop().animate({ top: "-50px" });
            $("footer").stop().animate({ bottom: "-100px" });
        },
        onTop   : function() {
            $("nav[role=banner]").stop().animate({ top: "0" });
            $("footer").stop().animate({ bottom: "0" });
        },
        onPin   : function() {
            $("nav[role=banner]").stop().animate({ top: "0" });
            $("footer").stop().animate({ bottom: "0" });
        },
        onUnpin : function() {
            $("nav[role=banner]").stop().animate({ top: "-50px" });
            $("footer").stop().animate({ bottom: "-100px" });
        }
    });
    $(".post-body p").each(function() {
        if($(this).find("img").length) {
            $(this).css("text-align", "center");
        }
    });
    $(".post-body img").addClass("img-thumbnail img-responsive");
});

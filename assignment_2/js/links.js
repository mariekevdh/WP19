var fileName = document.URL;

function createLink() {
        $(".col-md-12").append("<ul id='links'></ul>");
        $("#links").append("<li><a href=\"https://www.google.com\" target='_blank'>Google</a></li>");
        $("#links").append("<li><a href=\"https://www.bing.com\" target='_blank'>Bing</a></li>");
        $("#links").append("<li><a href=\"https://www.duckduckgo.com\" target='_blank'>DuckDuckGo</a></li>");
}

function fade() {
    $(".col-md-12").append("<button id='fade'>Fade</button>");
    $("#fade").click(function () {
        $("#links").fadeToggle();
    });
}

function validateForm(){
    return ($("input#linkname").val()!== "" && $("input#url").val() !== "");
}

function input() {
    col = $(".col-md-12");
    col.append("<h5>Submit your own link:</h5>");
    col.append("<form></form>");
    col.append("<div id='error'></div>");
    $("#error").css("color", "red");
    $("form").append("<input type='text' placeholder='Link name' id='linkname'/>");
    $("form").append("<input type='text' placeholder='URL' id='url'/>");
    $(".col-md-12").append("<button id='submit'>Submit</button>");

    $("#submit").click(function () {
        if(validateForm()) {
            $("#error").hide();
            $("#links").append("<li><a target='_blank'></a></li>");
            $('ul li:last-child a').attr('href', $("input#url").val());
            $('ul li:last-child a').text($("input#linkname").val());
        } else {
            $("#error").show();
            $("#error").text("Please fill in all fields");
        }
    })
}


$(function() {
    if (fileName.includes("links.php")) {
        createLink();
        fade();
        input();
    }
});
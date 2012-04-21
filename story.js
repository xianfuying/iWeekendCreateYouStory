$(document).ready(function() {
    $('.submit-content').bind('click', function(event) {
        event.preventDefault();
        var content = $('.add-content').val();
        if (content == "") {
            alert("input content");
            return;
        }
        else {
            $('.story-added ul').prepend(
                    "<li>" +
                    "   <p>" + content +
                    "   </p>" +
                    "   </li>");
            $('.add-content').val("");
        }
    });
});

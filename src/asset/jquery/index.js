$(document).ready(function(){
    $('.container1 .left_elem').click(function(){
        $('.container1 .left_elem').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    

    $('#button_right').click(function() {
        var classActive = $('.container1 .active');
        classActive.hide();
        $('#button_right').css("background-color", "yellow");
        $('#button_left').removeAttr("style");
        $('.container2 .left_elem').click(function(){
            $('.container2 .left_elem').removeClass('active');
            $(this).addClass('active');
            return false;
        });
        $('.container2').append(classActive);
        classActive.removeClass('active');
        classActive.removeAttr("style");
    });

    $('.container2 .left_elem').click(function(){
        $('.container2 .left_elem').removeClass('active');
        $(this).addClass('active');
        return false;
    });

    $('#button_left').click(function() {
        var classActivee = $('.container2 .active');
        $('#button_left').css("background-color", "yellow");
        $('#button_right').removeAttr("style")
        classActivee.hide();
        $('.container1 .left_elem').click(function(){
            $('.container1 .left_elem').removeClass('active');
            $(this).addClass('active');
            return false;
        });       
        $('.container1').append(classActivee);
        classActivee.removeClass('active');
        classActivee.removeAttr("style");
    });
});
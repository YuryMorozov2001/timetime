$(document).ready(function () {
    $("#menu_btn").click(show);
    $(".style_link").click(selected)
});
var checkMenu = false;
function show() {
    if (checkMenu == false) {
        checkMenu = true;
        $(".menu_link").show('fast');
    } else {
        $(".menu_link").hide('fast');
        checkMenu = false;
    }
}
function selected() {
    $('.style_link').removeClass('link_active');
    $(this).addClass('link_active');
}
$(document).ready(function () {
    jQuery("body").on("click", "#createDiary", createElement);
    jQuery("body").on("click", ".mood_box_image", pickMood);
    jQuery("body").on("click", ".note_box_remove", hideBlock);
});
var color = "rgb(130, 163, 125)";
var id_dBlock = 0;
function createElement() {
    if ($(inputBox).val() != '') {
        $('<div>', { class: 'note_box', id: id_dBlock, style: 'background-color: ' + color }).prependTo('.area_grid ').hide().fadeIn(350);
        $('<div>', { class: 'note_box_padding', id: id_dBlock + "_pad" }).appendTo('#' + id_dBlock);
        var date = new Date();
        var month = date.getMonth() + 1;
        var today = date.getDate() + "." + month + "." + date.getFullYear();

        $('<div>', { class: 'note_box_top', id: id_dBlock + "_top" }).appendTo('#' + id_dBlock + "_pad");
        $('<div>', { class: 'note_box_date', text: today, id: id_dBlock + "_date" }).appendTo('#' + id_dBlock + "_top");
        $('<div>', { class: 'note_box_remove', text: 'X', id: id_dBlock }).appendTo('#' + id_dBlock + "_top");
        $('<div>', { class: 'note_box_text', text: $(inputBox).val(), id: id_dBlock + "_h" }).appendTo('#' + id_dBlock + "_pad");
        var line = $("#" + id_dBlock + "_h").height() / 18;
        if (line >= 9) {
            $('<a>', { class: 'note_box_text_continue', id: id_dBlock + "_a", style: 'background-color: ' + color + '; box-shadow: 0 -4px 5px ' + color }).appendTo('#' + id_dBlock);
            $('<div>', { class: 'note_box_text_continue_text', text: "смотреть полностью" }).appendTo('#' + id_dBlock + "_a");
        }
        $(id_dBlock).css({
            'color': 'green',
            'font-size': '16px'
        });
        ++id_dBlock;
        $(inputBox).val('');
    }
}
function pickMood() {
    $('.mood_box_image').removeClass('active');
    $(this).addClass('active');
    color = $(".active").css('background-color');
}
var id;
function hideBlock() {
    id = $(this).attr("id");
    $('#' + id).fadeOut('fast');
    setTimeout(remove, 500);
}

function remove() {
    $('#' + id).remove();
}
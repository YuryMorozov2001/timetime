$(document).ready(function () {
    jQuery("body").on("click", "#create_li", createLi);
    jQuery("body").on("click", ".color", pickColor);
    jQuery("body").on("click", "#createList", createListBlock);
    jQuery("body").on("click", ".remove", removelisttools);
});

var id_lBlock = 0;
var id_inputT = 0;
function createLi() {
    var bwpl = "bwpl";
    $('<div>', {
        style: "display: flex; margin-left: 25px;", id: id_inputT + "_back"
    }).appendTo("#list_ul").hide().fadeIn(350);
    $('<div>', {
        class: bwpl,
        contenteditable: "true", placeholder: "Напишите задачу"
    }).appendTo("#" + id_inputT + "_back");
    $('<div>', {
        class: "remove", text: "x", id: id_inputT
    }).appendTo("#" + id_inputT + "_back")
    //$('<li>', { class: 'punkt', id: id_lBlock }).appendTo("#list_ul").hide().fadeIn(350);
    //$('<div>', { contenteditable: "true", placeholder: "Напишите задачу" }).appendTo('#' + id_lBlock);
    //$('<div>', { class: 'note_box_remove', text: 'X', id: id_lBlock }).appendTo('#' + id_lBlock);
    ++id_inputT;
    ccount++;
}
function pickColor() {
    $('.color').removeClass('active');
    $(this).addClass('active');
    colorr = $(".active").css('background-color');
}
var ccount = 0;
var colorr = "rgb(82, 126, 94)";
function createListBlock() {
    console.log(ccount);
    if (ccount > 0) {
        $('<div>', { class: 'note_box', id: id_lBlock, style: 'background-color: ' + colorr }).prependTo('.area_grid ').hide().fadeIn(350);
        $('<div>', { class: 'note_box_padding', id: id_lBlock + "_pad" }).appendTo('#' + id_lBlock);
        date = new Date();
        month = date.getMonth() + 1;
        var today = date.getDate() + "." + month + "." + date.getFullYear();
        $('<div>', { class: 'note_box_top', id: id_lBlock + "_top" }).appendTo('#' + id_lBlock + "_pad");
        $('<div>', { class: 'note_box_date', text: today, id: id_lBlock + "_date" }).appendTo('#' + id_lBlock + "_top");
        $('<div>', { class: 'note_box_remove', text: 'X', id: id_lBlock }).appendTo('#' + id_lBlock + "_top");
        $('<div>', { class: 'note_box_text_list', id: id_lBlock + "_h" }).appendTo('#' + id_lBlock + "_pad");
        $('.bwpl').each(function (i, obj) {
            if ($(this).text() != '') {
                var test = '<label id= ' + id_lBlock + "_point" + '><input type="checkbox" name="check"><div class="text_check">' + $(this).text() + '</div></label>';
                $(test).appendTo("#" + id_lBlock + "_h");
            }
        });
        ++id_lBlock;
        $("#list_ul").remove();
        $('<div>', { id: 'list_ul' }).appendTo(".list_box");
        ccount = 0;
    }
}

function removelisttools() {
    ccount--;
    var removeId = "#" + $(this).attr("id") + "_back";
    $(removeId).remove();
}


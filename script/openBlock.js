$(document).ready(function () {

    jQuery("body").on("click", ".note_box_text_continue", openText);
    jQuery("body").on("click", ".close_box", exit);
    jQuery("body").on("click", ".test_test_exit", exit);
});

var splitId;
function openText() {
    splitId = $(this).attr("id");
    splitId = splitId.replace('_a', '_h');
    var text = $('#' + splitId).text();
    splitId = splitId.replace('_h', '_date');
    var title = $('#' + splitId).text();
    openblock(title, text);
}
function openblock(title, text) {
    $('<div>', { class: 'test' }).appendTo(".openBlock");
    $('<div>', { class: 'test_test' }).appendTo(".test");
    $('<div>', { class: 'test_title' }).appendTo(".test_test");
    $('<div>', { class: 'test_test_title', text: title }).appendTo(".test_title");
    $('<div>', { class: 'test_test_exit', text: "X" }).appendTo(".test_title");
    $('<div>', { class: 'test_test_test' }).appendTo(".test_test");
    $('<div>', { class: 'test_test_test_text', id: "text_text_id" }).appendTo(".test_test_test");
    document.getElementById("text_text_id").innerHTML = text;
    $('<div>', { class: 'close_box' }).appendTo(".test");
}
function test() {
    splitId = $(this).attr("id");
    splitId = splitId.replace('_a', '_h');
    console.log($("#" + splitId).attr("label"));
}
////function openList(title, text) {
////    $('<div>', { class: 'test' }).appendTo(".openBlock");
////    $('<div>', { class: 'test_test' }).appendTo(".test");
////    $('<div>', { class: 'test_title' }).appendTo(".test_test");
////    $('<div>', { class: 'test_test_title', text: title }).appendTo(".test_title");
////    $('<div>', { class: 'test_test_exit', text: "X" }).appendTo(".test_title");
////    $('<div>', { class: 'test_test_test' }).appendTo(".test_test");
////    $('<div>', { class: 'test_test_test_text', text: text }).appendTo(".test_test_test");
////    $('<div>', { class: 'close_box' }).appendTo(".test");
////}
function exit() {
    $(".test").remove();
}
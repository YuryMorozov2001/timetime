window.onload = function () {
    document.getElementById("create_li").onclick = createLi;
    this.document.getElementById("btn").onclick = btn;
}
function createLi() {
    var li = document.createElement("li");
    li.innerHTML = '<div contenteditable="true" placeholder="Напишите задачу" style="width: auto; min-height: 14px"></div>';
    li.setAttribute("id", "lili");
    document.getElementById("list_ul").appendChild(li);
}

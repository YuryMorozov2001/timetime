
$(document).ready(function () {

    var hash = window.location.hash.substr(1);
    var href = $('.menu_link a').each(function () {
        var href = $(this).attr('href');
        if (href != 'index.html') {
            if (hash == href.substr(0, href.length - 5)) {
                var toLoad = hash + '.html #content';
                $('#content').load(toLoad)
            }
        }
    });
    $('.menu_link a').click(function () {
        var toLoad = $(this).attr('href') + ' #content';
        $('#warp').append('<div class="sss" id="load"><img src="image/loader.gif" alt="Загрузка..."></div>');
        window.location.hash = $(this).attr('href').substr(0, $(this).attr('href').length - 5);
        $('#content').hide('1000', loadContent);
        function loadContent() {
            $('#content').load(toLoad, '', showNewContent())
        }
        function showNewContent() {
            $('#content').show('normal', hideLoader());
        }
        function hideLoader() {
            setTimeout(fadeout, 500);
        }
        function fadeout() {
            $('#load').fadeOut('fast');
            setTimeout(remove, 500);
        }
        function remove() {
            $('#load').remove();
        }
        if ($(this).attr('href') == 'index.html') {
            $("#element").load($(this).attr('href') + " #element");
            $.getScript('typedit.js');
            $.getScript('animText.js');
        }
        return false;
    });
});
$(document).ready(function() {
    $.getJSON("../version.json", function(version) {
        if (version.history.length > 0) {
            var blockContent = '<div class="btn-group"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Change version <span class="caret"></span></button><ul class="dropdown-menu"></ul></div>';
            $('#version-list').append(blockContent);
            var wholeVersion = version.history;
            wholeVersion.push(version.latest);
            wholeVersion.forEach(function(v) {
                $('#version-list ul').append('<li><a href="#">'+ v + '</li>');
            });

            $("#version-list li").click(function() {
                    var pathname = window.location.pathname;
                    window.location.href = window.location.href.replace(pathname, '/'+ $(this).text() + '/')
                    return false;
            });
        }
    });
});

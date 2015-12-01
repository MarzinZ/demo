$(document).ready(function() {
    var jqxhr = $.getJSON('version.json', function(data) {
        window.location.replace(data.latest);
    });
});

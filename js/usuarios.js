$(function () {
    $.ajax({
        url: 'https://randomuser.me/api/?results=5',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        }
    });
});


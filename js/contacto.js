$(function () {

    $.ajax(`.../productos.json`)
        .done( (data, textStatus, jqXHR) => {
            console.log(data);
        })
        .fail( (jqXHR, textStatus, errorThrown) => {
            console.log(errorThrown);
        })
});

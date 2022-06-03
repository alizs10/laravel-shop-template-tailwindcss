$('#verification_code_form input')[0].focus();

$('#verification_code_form input').on('input', function (event) {
 
    if(isNaN($(this).val())) {
        $(this).val('')
        return;
    }
    let id = $(this).attr('id')
    id = id.slice(4, id.length)

    if ($(this).val().length === 1 && id < 6) {
        $('#verification_code_form input')[id].focus()
    }

})

$('#verification_code_form input').on('keydown', function (event) {

    let id = $(this).attr('id')
    id = id.slice(4, id.length)
    if ($(this).val().length === 0 && id > 1 && event.keyCode == 8) {
        $('#verification_code_form input')[id - 2].focus()
    }

})
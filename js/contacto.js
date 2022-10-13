//Validacion
$(document).ready(function () {
    if (window.location.href.indexOf('contacto') > -1) {
        $('form #date').datepicker({
            dateFormat: 'dd-mm-yy'
        })
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: 'top'
        })
    }
})
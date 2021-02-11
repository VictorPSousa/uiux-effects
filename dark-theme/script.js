$('#switch').on('click', () => {
    if ($('#switch').prop('checked')) {
        $('.wrapperer').addClass('dark');
    } else {
        $('.wrapperer').removeClass('dark');
    }
})
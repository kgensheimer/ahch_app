// Makes Bootstrap4 custom file input dynamic (shows the file name after upload)
$(document).on('change', '.custom-file-input', (event) => {
    $(this).next('.custom-file-label').html(event.target.files[0].name);
})


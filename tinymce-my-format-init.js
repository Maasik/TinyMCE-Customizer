jQuery( document ).on( 'tinymce-editor-init', function( event, editor ) {
    // register the formats
    tinymce.activeEditor.formatter.register('division', {
        block : 'div',
        classes : 'division',
		wrapper : true
    });
});
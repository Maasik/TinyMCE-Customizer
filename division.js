/*
 * Adds a new custom DIV button.
 * The button will toggle DIV markup around the selection.
 */

(function() {
    tinymce.PluginManager.add( 'division', function( editor, url ) {
		editor.addButton( 'division', {
            title: 'Объединить',
            type: 'button',
			image: url+'/division.png',
            onclick: function() {
					editor.formatter.toggle('division');
			}
        });

    });
})();

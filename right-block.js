/*
 * Adds a new custom format button.
 * If block is selected, the button will toggle ".rightblock" class markup on focus.
 */

(function() {
    tinymce.PluginManager.add( 'right_block', function( editor, url ) {

		editor.addButton( 'right_block', {
            title: 'Прижать справа',
            type: 'button',
			image: url+'/right-block.png',
            onclick: function() {
				
				var block = editor.selection.getNode();
				
				// Find first childNodes in <body>
				while ( block.parentNode.nodeName != 'BODY' ) {

					block = block.parentNode;
					
				}

				// Toggle "...block" classes
	            if ( !block.classList.contains('rightblock') ) {

					block.classList.add('rightblock');
					
					if ( block.classList.contains('leftblock') ) {

						block.classList.remove('leftblock');
						
					}
					
				} else {
					
					block.classList.remove('rightblock');
					
				}
				
				//Remove "class" attribute if empty
				if ( block.className == '' ) {

					block.removeAttribute('class');
						
				}

			}
        });

    });
})();

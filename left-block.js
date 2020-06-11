/*
 * Adds a new custom format button.
 * If block is selected, the button will toggle ".leftblock" class markup on focus.
 */

(function() {
    tinymce.PluginManager.add( 'left_block', function( editor, url ) {

		editor.addButton( 'left_block', {
            title: 'Прижать слева',
            type: 'button',
			image: url+'/left-block.png',
            onclick: function() {
				
				var block = editor.selection.getNode();
				
				// Find first childNodes in <body>
				while ( block.parentNode.nodeName != 'BODY' ) {

					block = block.parentNode;
					
				}

				// Toggle "...block" classes
	            if ( !block.classList.contains('leftblock') ) {

					block.classList.add('leftblock');
					
					if ( block.classList.contains('rightblock') ) {

						block.classList.remove('rightblock');
						
					}
					
				} else {
					
					block.classList.remove('leftblock');
					
				}
				
				//Remove "class" attribute if empty
				if ( block.className == '' ) {

					block.removeAttribute('class');
						
				}

			}
        });

    });
})();

/*
 * Adds a new custom format button.
 * If block is selected, the button will toggle ".rightfield" class markup on focus.
 */

(function() {
    tinymce.PluginManager.add( 'right_field', function( editor, url ) {

		editor.addButton( 'right_field', {
            title: 'На правое поле',
            type: 'button',
			image: url+'/right-field.png',
            onclick: function() {
				
				var block = editor.selection.getNode();
				
				// Find first childNodes in <body>
				while ( block.parentNode.nodeName != 'BODY' ) {

					block = block.parentNode;
					
				}

				// Toggle "...block" classes
	            if ( !block.classList.contains('rightfield') ) {

					block.classList.add('rightfield');
					
					if ( block.classList.contains('leftfield') ) {

						block.classList.remove('leftfield');
						
					}
					
				} else {
					
					block.classList.remove('rightfield');
					
				}
				
				//Remove "class" attribute if empty
				if ( block.className == '' ) {

					block.removeAttribute('class');
						
				}

			}
        });

    });
})();

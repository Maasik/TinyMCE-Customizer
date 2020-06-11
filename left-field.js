/*
 * Adds a new custom format button.
 * If block is selected, the button will toggle ".leftfield" class markup on focus.
 */

(function() {
    tinymce.PluginManager.add( 'left_field', function( editor, url ) {

		editor.addButton( 'left_field', {
            title: 'На левое поле',
            type: 'button',
			image: url+'/left-field.png',
            onclick: function() {
				
				var block = editor.selection.getNode();
				
				// Find first childNodes in <body>
				while ( block.parentNode.nodeName != 'BODY' ) {

					block = block.parentNode;
					
				}

				// Toggle "...block" classes
	            if ( !block.classList.contains('leftfield') ) {

					block.classList.add('leftfield');
					
					if ( block.classList.contains('rightfield') ) {

						block.classList.remove('rightfield');
						
					}
					
				} else {
					
					block.classList.remove('leftfield');
					
				}
				
				//Remove "class" attribute if empty
				if ( block.className == '' ) {

					block.removeAttribute('class');
						
				}

			}
        });

    });
})();

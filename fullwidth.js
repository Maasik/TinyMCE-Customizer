/*
 * Adds a new custom format button.
 * If block is selected, the button will toggle ".fullwidth" class markup on focus.
 */

(function() {
    tinymce.PluginManager.add( 'fullwidth', function( editor, url ) {

		editor.addButton( 'fullwidth', {
            title: 'На всю ширину',
            type: 'button',
			image: url+'/fullwidth.png',
            onclick: function() {
				
				var block = editor.selection.getNode();
				
				// Find first childNodes in <body>
				while ( block.parentNode.nodeName != 'BODY' ) {

					block = block.parentNode;
					
				}

				// Toggle "...block" classes
	            if ( !block.classList.contains('fullwidth') ) {

					block.classList.add('fullwidth');
					
					if ( block.classList.contains('leftblock') ) {

						block.classList.remove('leftblock');
						
					}
					
					if ( block.classList.contains('rightblock') ) {

						block.classList.remove('rightblock');
						
					}
					
					if ( block.classList.contains('leftfield') ) {

						block.classList.remove('leftfield');
						
					}
					
					if ( block.classList.contains('rightfield') ) {

						block.classList.remove('rightfield');
						
					}
					
					
				} else {
					
					block.classList.remove('fullwidth');
					
				}
				
				//Remove "class" attribute if empty
				if ( block.className == '' ) {

					block.removeAttribute('class');
						
				}

			}
        });

    });
})();

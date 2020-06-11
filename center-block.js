/*
 * Adds a new custom format button.
 * If block is selected, the button will remove "...block" & "...field" classes markup on focus.
 */

(function() {
    tinymce.PluginManager.add( 'center_block', function( editor, url ) {

		editor.addButton( 'center_block', {
            title: 'В поток',
            type: 'button',
			image: url+'/center-block.png',
            onclick: function() {
				
				var block = editor.selection.getNode();
				
				// Find first childNodes in <body>
				while ( block.parentNode.nodeName != 'BODY' ) {

					block = block.parentNode;
					
				}

				// Remove "...block" classes
	            if ( block.classList.contains('leftblock') ) {

					block.classList.remove('leftblock');
					
				}
					
				if ( block.classList.contains('rightblock') ) {

					block.classList.remove('rightblock');
						
				}
				
				// Remove "...field" classes
	            if ( block.classList.contains('leftfield') ) {

					block.classList.remove('leftfield');
					
				}
					
				if ( block.classList.contains('rightfield') ) {

					block.classList.remove('rightfield');
						
				}
				
				if ( block.classList.contains('fullwidth') ) {

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

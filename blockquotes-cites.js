/*
 * Adds a new custom blockquote button.
 * If text is selected, the button will toggle blockquote markup around the selection.
 * If no text is selected, a pop-up will display options for quote, citation, citation link.
 */

(function() {
    tinymce.PluginManager.add( 'blockquote_cites', function( editor, url ) {

		editor.addButton( 'blockquote_cites', {
            title: 'Внешняя цитата',
            type: 'button',
			image: url+'/blockquotes-cites.png',
            onclick: function() {

				// If text is selected, toggle blockquote markup
	            if ( editor.selection.getContent() ) {

					editor.formatter.toggle('blockquote');
					
				// If no text is selected, display pop-up
	            } else {

					// Standard fields to display in blockquote pop-up
		            var body = [
					    {
					        type: 'textbox',
					        name: 'quote',
					        label: 'Цитируемый текст',
					        multiline: true,
					        minWidth: 300,
							minHeight: 100
					    },
						{
					        type: 'textbox',
					        name: 'pref',
					        label: 'Введение'
					    },
						{
					        type: 'textbox',
					        name: 'cite',
					        label: 'Источник'
					    },
						{
					        type: 'textbox',
					        name: 'link',
					        label: 'Ссылка на источник'
					    },
						{
					        type: 'textbox',
					        name: 'supplement',
					        label: 'Дополнение'
					    }
					];

					// Display classes dropdown in pop-up if defined
					//if ( blockquotes_cites.class_options ) {
					//	var class_options = [];
					//	for ( var key in blockquotes_cites.class_options ) {
					//		class_options.push({ 'value': key, 'text' : blockquotes_cites.class_options[key] });
					//	}

					//	body.push({
					//        type: 'listbox',
					//        name: 'class',
					//        label: 'Класс',
					//        values : class_options
					//    });
					//}

					editor.windowManager.open({
					    title: 'Внешняя цитата',
					    body: body,
					    onsubmit: function( e ) {
						    var blockquote = '';
						    var cite = '';
							
							//Temporary class for external blockquote
							e.data.class = 'external-blockquote';
							
							if ( e.data.pref ) {
								e.data.pref = e.data.pref + ', ';
							}
							
							if ( e.data.supplement ) {
								e.data.supplement = ', ' + e.data.supplement;
							}

							if ( e.data.link && e.data.cite ) {
								cite = '<footer><cite>' + e.data.pref + '<a href="' + e.data.link + '">' + e.data.cite + '</a>' + e.data.supplement + '</cite></footer>';
	              			} else if ( !e.data.link && e.data.cite ) {
				  				cite = '<footer><cite>' + e.data.cite + e.data.supplement + '</cite></footer>';
	              			}

	  						if ( e.data.quote ) {
		  						if ( e.data.class ) {
			  						blockquote += '<blockquote class="' + e.data.class + '">';
		  						} else {
			  						blockquote += '<blockquote>';
		  						}
	  							blockquote += e.data.quote;
	  							blockquote += cite;
	  							blockquote += '</blockquote>';
						    }

					        editor.insertContent(blockquote);

					    }
					});

				}
			}
        });

    });
})();

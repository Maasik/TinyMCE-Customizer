/*
 * Adds a new custom factoid button.
 * A pop-up will display options for factoid and additional text.
 */

(function() {
    tinymce.PluginManager.add( 'factoid', function( editor, url ) {

		editor.addButton( 'factoid', {
            title: 'Фактоид',
            type: 'button',
			image: url+'/factoid.png',
            onclick: function() {

				// Standard fields to display in factoid pop-up
		        var body = [
					{
						type: 'textbox',
						name: 'fact',
						label: 'Факт'
					},
					/*{
						type: 'textbox',
						name: 'add1',
						label: 'Справа'
					},*/
					{
						type: 'textbox',
						name: 'add2',
						label: 'Снизу'
					},
					{
						type: 'textbox',
						name: 'atext',
						label: 'Дополнительный текст',
						multiline: true,
						minWidth: 300,
						minHeight: 100
					}
				];

				editor.windowManager.open({
				    title: 'Фактоид',
				    body: body,
				    onsubmit: function( e ) {
					    var factoid = '';
						var insert = '';
							
  						if ( e.data.fact ) {
							
							/*if ( e.data.add1 ) {
								insert += '<div class="rightpart">' + e.data.add1 + '</div>';
							}*/
						
							if ( e.data.add2 ) {
								insert += '<div class="bottompart">' + e.data.add2 + '</div>';
							}

							if ( e.data.atext ) {
								insert += '<div class="additionalpart">' + e.data.atext + '</div>';
							}

	  						factoid += '<div class="factoid">';
  							factoid += '<div class="mainpart">' + e.data.fact + '</div>';
  							factoid += insert;
  							factoid += '</div>';
							
							editor.insertContent(factoid);
							
					    }

				    }
				});
			}
        });

    });
})();

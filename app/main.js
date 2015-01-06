/**
 * Created by kburas on 1/6/2015.
 */
// main.js
var client = new ZeroClipboard( $("#click-to-copy"), {
    moviePath: "../bower_components/zeroclipboard/dist/ZeroClipboard.swf",
    debug: false
} );

client.on( "load", function(client)
{
    $('#flash-loaded').fadeIn();

    client.on( "complete", function(client, args) {
        client.setText( "Set text copied." );
        $('#click-to-copy-text').fadeIn();
    } );
} );
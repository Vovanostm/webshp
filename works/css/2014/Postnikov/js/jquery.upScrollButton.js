jQuery.fn.upScrollButton = function( options ) {
	var options = jQuery.extend( {

		heightForButtonAppear : 100,
		heightForScrollUpTo : 0, 
		scrollTopTime : 350,
		upScrollButtonId : 'move_up', 
		upScrollButtonText : '', 
		upScrollButtonFadeInTime :300, 
		upScrollButtonFadeOutTime :300,	

	}, options );
	return this.each( function( ) {
	
		jQuery( 'body' ).append( '<a id="' + options.upScrollButtonId + '" href="#">' + options.upScrollButtonText + '</a>' );
		jQuery( window ).scroll( function () {
			if ( jQuery( this ).scrollTop()  > options.heightForButtonAppear )
				jQuery( 'a#' + options.upScrollButtonId  ).fadeIn(options.upScrollButtonFadeInTime );
			else
				jQuery( 'a#' + options.upScrollButtonId ).fadeOut( options.upScrollButtonFadeOutTime );
		});
		jQuery( 'a#' + options.upScrollButtonId ).click( function ( ) {
			jQuery( 'body,html' ).animate( {
				scrollTop: options.heightForScrollUpTo
			}, options.scrollTopTime );
			return false;
		});
	});

}
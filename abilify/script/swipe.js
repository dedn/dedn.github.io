//swipe panel

$( document ).on( "pageinit", "#page_1", function() {

    $( document ).on( "swipeleft swiperight", "#page_1", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft" ) {
                $( "#right-panel1" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel1" ).panel( "open" );
            }
        }
    });
});
$( document ).on( "pageinit", "#page_2", function() {

    $( document ).on( "swipeleft swiperight", "#page_2", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft" ) {
                $( "#right-panel2" ).panel( "open" );
            } else if ( e.type === "swiperight" ) {
                $( "#left-panel2" ).panel( "open" );
            }
        }
    });
});
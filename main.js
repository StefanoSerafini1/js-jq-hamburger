//mostrare / nascondere il menu principale usando jq


//quando clicco il menu compare

$( ".fa-bars" ).click(function() {

   $( ".hamburger-menu" ).addClass( "active" );
 });

//quando clicco sulla x il menu scompare

$( ".fa-times" ).click(function() {

   $( ".hamburger-menu" ).removeClass( "active" );
 });

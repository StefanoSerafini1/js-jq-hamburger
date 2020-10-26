//mostrare / nascondere il menu principale usando jq


//quando clicco il menu compare uso classe .fa-bars(html) e hamburger-menu.active(css)
//usando funz al click su fa-bars richiamando hamburger menu active dalla media query
$( ".fa-bars" ).click(function() {

   $( ".hamburger-menu" ).addClass( "active" );
 });

//quando clicco sulla x il menu scompare uso classe .fa-times(html) e hamburger-menu.active(css)
////usando funz al click su fa-times richiamando hamburger menu active dalla media query
$( ".fa-times" ).click(function() {

   $( ".hamburger-menu" ).removeClass( "active" );
 });

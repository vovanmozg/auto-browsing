var page = new WebPage(),
    system = require('system'),
    mconly_login = 'http://mail.ru/index.php?do=cp&sel=3';


page.open(mconly_login, function (status) {
	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
  
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {

        var ua = page.evaluate(function () {
        	$('#loginform form input#email').text('sdfsdfsdf@gmail.com');
        	$('#loginform form input#password').text('gasdq23fsf');
        	$('#loginform').submit();

            
        });
        console.log(ua);
    }
    phantom.exit();
})


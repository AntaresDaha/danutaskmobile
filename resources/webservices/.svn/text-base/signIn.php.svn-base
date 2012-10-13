<?php
// HELPER FUNCTIONS
function toLog($strLog, $bAddTime){
	$myFile = "phpLog.txt";
	$fh = fopen($myFile, 'a');
	if($bAddTime)
		fwrite($fh, "\nLog at: " . date("d.m.Y H:i:s") . ":");
	fwrite($fh, "\n\t" . $strLog);
	fclose($fh);
} 

// MAIN CODE
// Log url/call
$url = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
toLog('url: ' . $url, true);

// initis
$email = null;
$password = null;
$data = null;
$callback = null;

// read arguments
if (isset($_REQUEST['email'])){ 
	$email = $_REQUEST['email'];
	//toLog('email: ' . $email, false);
}
if (isset($_REQUEST['password'])){ 
	$password = $_REQUEST['password'];
	//toLog('password: ' . $password, false);
}
if (isset($_REQUEST['callback'])){ 
	$callback = $_REQUEST['callback'];
	//toLog('callback: ' . $callback, false);
}

toLog('email: ' . $email, false);
toLog('password: ' . $password, false);
toLog('callback: ' . $callback, false);

// soap call
if($email != null && $password != null){	
	$passwordHash = md5($password);
	
	// new soap client
	$client = new SoapClient("http://auth.b-op.be/Services/SessionService.asmx?WSDL",
		array(
			"trace"      => 1,		// enable trace to view what is happening
			"exceptions" => 0,		// disable exceptions
			"cache_wsdl" => 0) 		// disable any caching on the wsdl, encase you alter the wsdl server
	);
	
	// call web service and get response
	$answer = $client->SignIn(array("email" => $email, "passwordHash" => $passwordHash));
	
	if (property_exists($answer, "SignInResult")) {
		// call successful --> get sessionID
		$data = '
					{ 	
						"successfull": true, 
						"sessionid": "' .$answer->SignInResult. '",
					}
				'; // OUTPUT MUST LOOK LIKE THAT
	} 
	else {
		$data = '
					{ 	
						"successfull": false, 
						"sessionid": "signIn unsuccessful",
					}
				'; // OUTPUT MUST LOOK LIKE THAT
	}
}

toLog('data: ' . $data, false);

// return/echo
if ($callback) { // if called by sencha return javascript json object
    header('Content-Type: text/javascript');
    echo $callback . '(' . $data . ');';
} else { // else simply pprint result to screen
    //header('Content-Type: application/x-json');
    echo $data;
}
?>
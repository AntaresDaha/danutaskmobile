<?php
// MAIN CODE
// Log url/call
//$url = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
//toLog('url: ' . $url, true);

// initis
$callback = null;
if (isset($_REQUEST['callback'])){ 
	$callback = $_REQUEST['callback'];
	//toLog('callback: ' . $callback, false);
}

// return/echo
if ($callback) { // if called by sencha return javascript json object
    header('Content-Type: text/javascript');
    echo $callback . '(null);';
} else { // else simply pprint result to screen
    //header('Content-Type: application/x-json');
    echo 'null';
}
?>
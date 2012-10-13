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

function startsWith($haystack, $needle) {
    return strpos($haystack, $needle) === 0;
}

function addToDataBase($jsonData){
	$myFile = "Events.json";
	$fh = fopen($myFile, 'a');
	fwrite($fh, $jsonData . "\n");	
	fclose($fh);
} 

function deleteFromDataBase($dataId){
	$lines = file("Events.json", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
		$myFile = "Events.json";
		$fh = fopen($myFile, 'w');
		foreach ($lines as $jsonThisLine) {
			//toLog("\tdel: " . $jsonThisLine, false);			
			$asjsonobj = json_decode($jsonThisLine);			
			if($dataId != $asjsonobj->{'id'})
				fwrite($fh, $jsonThisLine . "\n");
		}
		fclose($fh);	
}

function updateToDataBase($dataId, $updateData){
	$lines = file("Events.json", FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
		$myFile = "Events.json";
		$fh = fopen($myFile, 'w');
		toLog("\ttry to update: " . $dataId, false);
		foreach ($lines as $jsonThisLine) {
			//toLog("\tup: " . $jsonThisLine, false);			
			$asjsonobj = json_decode($jsonThisLine) or die;			
			if($dataId != $asjsonobj->{'id'})
				fwrite($fh, $jsonThisLine . "\n");
			else{
				toLog("\tupdated.", false);
				fwrite($fh, $updateData . "\n");
			}
		}
		fclose($fh);	
}

// MAIN CODE
// Log url
$url = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
toLog('url: ' . $url, true);

$data = '';

if (isset($_REQUEST['callback'])){ 
	$callback = $_REQUEST['callback'];
	toLog('callback: ' . $callback, false);
}
if (isset($_REQUEST['lastop']) || isset($_REQUEST['records'])){
	//convert url params to json
	if(isset($_REQUEST['lastop'])) 		$lastop = $_REQUEST['lastop']; 	else $lastop = substr($_REQUEST['records'], 7);		
	if(isset($_REQUEST['name'])) 		$name = $_REQUEST['name']; 		else $name = substr($_REQUEST['records'], 5);
	if(isset($_REQUEST['id'])) 			$id = $_REQUEST['id']; 			else $id = substr($_REQUEST['records'], 3);
	if(isset($_REQUEST['additional'])) 	$additional = $_REQUEST['additional']; else $additional = substr($_REQUEST['records'], 11); $additional = substr($additional, 0, 2000);
	if(isset($_REQUEST['url'])) 		$url = $_REQUEST['url']; 			else $url = substr($_REQUEST['records'], 4);
	if(isset($_REQUEST['date'])) 		$date = $_REQUEST['date']; 			else $date = substr($_REQUEST['records'], 5); $date = substr($date, 0, 10);
	if(isset($_REQUEST['status'])) 		$status = $_REQUEST['status']; 		else $status = substr($_REQUEST['records'], 7);
	if(isset($_REQUEST['favorite'])) 	$favorite = $_REQUEST['favorite'];	else $favorite = substr($_REQUEST['records'], 9);
	if(isset($_REQUEST['done'])) 		$done = $_REQUEST['done']; 			else $done = substr($_REQUEST['records'], 5);
	if(isset($_REQUEST['priority'])) 	$priority = $_REQUEST['priority']; 	else $priority = substr($_REQUEST['records'], 9);
	if(isset($_REQUEST['creator'])) 	$creator = $_REQUEST['creator']; 	else $creator = substr($_REQUEST['records'], 8);	
	
	// Update or delete or add?
	if($lastop == 'add'){ // add new record
		//name=Neues%20Event&additional=&url=&date=2012-09-14T12%3A37%3A47&status=idea&favorite=0&done=0&priority=50&creator=Beide&id=ext-record-11
		$id = rand(1,100000000000); // generate random id // no checks for double id here, maybe todo..

		$arrData = array ('favorite'=>$favorite,'name'=>$name,'additional'=>$additional,'url'=>$url,'date'=>$date,'status'=>$status,'done'=>$done,'priority'=>$priority,'creator'=>$creator,'id'=>$id);
		$jsonData = json_encode($arrData);

		toLog("\tADD: " . $jsonData, false);
		addToDataBase($jsonData);
//		$data = '{"success": true,' . '"records": [' . $jsonData . ']}';
		$data = '{"records": [' . $jsonData . ']}';
	}

	if($lastop == 'update'){ // update existing record
		$arrData = array ('name'=>$name,'additional'=>$additional,'url'=>$url,'date'=>$date,'status'=>$status,'favorite'=>$favorite,'done'=>$done,'priority'=>$priority,'creator'=>$creator,'id'=>$id);
		$jsonData = json_encode($arrData);

		toLog("\tUPDATE: " . $jsonData, false);
		updateToDataBase($id,$jsonData);		
				
//		$data = '{"success": true,' . '"records": [' . $jsonData . ']}';
		$data = '{"records": [' . $jsonData . ']}';
		
	}
	if($lastop == 'delete'){ // delete existing record
		$arrData = array ('name'=>$name,'additional'=>$additional,'url'=>$url,'date'=>$date,'status'=>$status,'favorite'=>$favorite,'done'=>$done,'priority'=>$priority,'creator'=>$creator,'id'=>$id);
		$jsonData = json_encode($arrData);

		toLog("\delete: " . $jsonData, false);
		deleteFromDataBase($id);
				
//		$data = '{"success": true,' . '"records": [' . $jsonData . ']}';
		$data = '{"records": [' . $jsonData . ']}';
		
	}
	
}
else 
	$name = null;

if($name == null){	
	$data = '[
		{ 	"id": 1, 
			"name": "Orankesee",
			"additional": "abc", 
			"url": "www.url.de", 
			"date": "11.11.2013", 
			"status": "Idee", 
			"favorite": "0", 
			"done": "0", 
			"priority": "50", 
			"creator": "Beide" },
		{ 	"id": 2, 
			"name": "Tanzen gehen", 
			"additional": "abc", 
			"url": "www.url.de", 
			"date": "11.11.2013", 
			"status": "Idee", 
			"favorite": "0", 
			"done": "0", 
			"priority": "70", 
			"creator": "Valeska" },
		{ 	"id": 3, 
			"name": "Autokino", 
			"additional": "abc", 
			"url": "www.url.de", 
			"date": "11.11.2013", 
			"status": "Idee", 
			"favorite": "0", 
			"done": "0", 
			"priority": "30", 
			"creator": "Dominik" },
		{ 	"id": 4, 
			"name": "Steak gebraten bekommen", 
			"additional": "abc", 
			"url": "www.url.de", 
			"date": "11.11.2013", 
			"status": "Idee", 
			"favorite": "0", 
			"done": "0", 
			"priority": "100", 
			"creator": "Valeska" },
		{ 	"id": 5, 
			"name": "SingStar/Rock Band Abend", 
			"additional": "abc", 
			"url": "www.url.de", 
			"date": "11.11.2013", 
			"status": "Idee", 
			"favorite": "0", 
			"done": "0", 
			"priority": "60", 
			"creator": "Valeska" },
		{ 	"id": 6, 
			"name": "Hörspielkino (unterm Sternenhimmel)", 
			"additional": "abc", 
			"url": "www.url.de", 
			"date": "11.11.2013", 
			"status": "Idee", 
			"favorite": "0", 
			"done": "0", 
			"priority": "30", 
			"creator": "Dominik" },
		{ 	"id": 7, 
			"name": "Tauchkurs", 
			"additional": "abc", 
			"url": "www.url.de", 
			"date": "11.11.2013", 
			"status": "Idee", 
			"favorite": "0", 
			"done": "0", 
			"priority": "50", 
			"creator": "Beide" }	
	]';
}
if ($callback) {
    header('Content-Type: text/javascript');
    echo $callback . '(' . $data . ');';
} else {
    header('Content-Type: application/x-json');
    echo $data;
}

?>
function loadJsonFromPath(path){
	$.getJSON(path, function(data){ // VORSICHT, dieser Callback Handler wird nur ausgeführt, wenn das abgerufene JSON WOHLGEFORMT ist
			console.log(data);
			// hier können nur platzhalter im HTML (Tags mit IDs etc.) mit Leben gefüllt werden
	});
}

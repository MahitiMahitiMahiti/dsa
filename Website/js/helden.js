function loadJsonFromPath(path){
	$.getJSON(path, function(data){ // VORSICHT, dieser Callback Handler wird nur ausgeführt, wenn das abgerufene JSON WOHLGEFORMT ist
			console.log(data);
			   var kurzbeschreibung = data.kurzbeschreibung;
				var aussehen = data.aussehen.kurzbeschreibung;
				var charakter = data.charakter;
				var hintergrundgeschichte = data.hintergrundgeschichte;
				var verbindungen = data.verbindungen;
				var feinde = data.feinde;				
			    $('#kurzbeschreibung').text(kurzbeschreibung);
				$('#aussehen').text(aussehen);
				$('#charakter').text(charakter);
				$('#hintergrund').text(hintergrundgeschichte);
				$('#verbindungen').text(verbindungen);
				$('#feinde').text(feinde);
				// hier können nur platzhalter im HTML (Tags mit IDs etc.) mit Leben gefüllt werden
	});
}
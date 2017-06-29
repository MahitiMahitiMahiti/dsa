function loadJsonFromPath(path){
	$.getJSON(path, function(data){ // VORSICHT, dieser Callback Handler wird nur ausgef�hrt, wenn das abgerufene JSON WOHLGEFORMT ist
			console.log(data);
			   var kurzbeschreibung = data.kurzbeschreibung;
				var aussehen = data.aussehen.kurzbeschreibung;
				var charakter = data.charakter;
				var hintergrundgeschichte = data.hintergrundgeschichte;
				var verbindungen = data.verbindungen;
				var feinde = data.feinde;				
				var augenfarbe = data.aussehen.augenfarbe;
				var haarfarbe = data.aussehen.haarfarbe;
			    $('#kurzbeschreibung').text(kurzbeschreibung);
				$('#aussehen').text(aussehen);
				$('#augenfarbe').text(augenfarbe);
				$('#haarfarbe').text(haarfarbe);
				$('#charakter').text(charakter);
				$('#hintergrund').text(hintergrundgeschichte);
				$('#verbindungen').text(verbindungen);
				$('#feinde').text(feinde);
				// hier k�nnen nur platzhalter im HTML (Tags mit IDs etc.) mit Leben gef�llt werden
	});
}
function loadJsonFromPath(path){
	$.getJSON(path, function(data){ // VORSICHT, dieser Callback Handler wird nur ausgeführt, wenn das abgerufene JSON WOHLGEFORMT ist
			console.log(data);
			   
			   var kurzbeschreibung = data.kurzbeschreibung;
				var aussehen = data.aussehen.kurzbeschreibung;
				var spieltseit = data.spieltseit;
				var regelsysteme = data.regelsysteme;
				var genre = data.genre;
				var helden = data.helden;				
			    $('#kurzbeschreibung').text(kurzbeschreibung);
				$('#spielstil').text(spielstil);
				$('#spieltseit').text(spieltseit);
				$('#regelsysteme').text(regelsysteme);
				$('#genre').text(genre);
				$('#helden').text(helden);
				// hier können nur platzhalter im HTML (Tags mit IDs etc.) mit Leben gefüllt werden
	});
}
function loadJsonFromPath(path){
	$.getJSON(path, function(data){ // VORSICHT, dieser Callback Handler wird nur ausgeführt, wenn das abgerufene JSON WOHLGEFORMT ist
			console.log(data);
			  var rolle = data.rolle;
				var spielstil = data.spielstil;
				var spieltseit = data.spieltseit;
				var regelsysteme = data.regelsysteme;
				var genre = data.Lieblingsgenre;
				var helden = data.Lieblingshelden;
			  $('#rolle').text(rolle);
				$('#spielstil').text(spielstil);
				$('#spieltseit').text(spieltseit);
				$('#regelsysteme').text(regelsysteme);
				$('#genre').text(genre);
				$('#helden').text(helden);
				// hier können nur platzhalter im HTML (Tags mit IDs etc.) mit Leben gefüllt werden
	});
}

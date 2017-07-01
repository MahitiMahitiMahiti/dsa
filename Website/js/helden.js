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
				var groesse = data.aussehen.groesse;
				var geburtsdatum = data.geburtsdatum;
				var grundprofession = data.professionen.grundprofession;
				var professionsvarianten = data.professionen.varianten;
				var grundkultur = data.kultur.grundkultur;
				var kulturvarianten = data.kultur.varianten;
				var grundrasse = data.rasse.grundrasse;
				var rassenvarianten = data.rasse.varianten;
				var titel = data.titel;
				var stand = data.stand;
				var familienstand = data.familie.familienstand;
				// var verheiratet = data.familie.verheiratet/liiert mit;   funktioniert so nicht
				var eltern = data.familie.eltern;
				var geschwister = data.familie.geschwister;
				var verwandte = data.familie.verwandte;
				var herkunft= data.herkunft.kurzbeschreibung;
				var geburtsort = data.herkunft.geburtsort;
				var wohnort = data.herkunft.wohnort;
			  $('#kurzbeschreibung').text(kurzbeschreibung);
				$('#aussehen').text(aussehen);
				$('#augenfarbe').text(augenfarbe);
				$('#haarfarbe').text(haarfarbe);
				$('#groesse').text(groesse);
				$('#charakter').text(charakter);
				$('#hintergrund').text(hintergrundgeschichte);
				$('#verbindungen').text(verbindungen);
				$('#feinde').text(feinde);
				$('#geburtsdatum').text(geburtsdatum);
				$('#grundprofession').text(grundprofession);
				$('#professionsvarianten').text(professionsvarianten);
				$('#grundkultur').text(grundkultur);
				$('#kulturvarianten').text(kulturvarianten);
				$('#grundrasse').text(grundrasse);
				$('#rassenvarianten').text(rassenvarianten);
				$('#titel').text(titel);
				$('#stand').text(stand);
				$('#familienstand').text(familienstand);
				// $('#verheiratet').text(verheiratet);
				$('#eltern').text(eltern);
				$('#geschwister').text(geschwister);
				$('#verwandte').text(verwandte);
				$('#herkunft').text(herkunft);
				$('#geburtsort').text(geburtsort);
				$('#wohnort').text(wohnort);
				// hier k�nnen nur platzhalter im HTML (Tags mit IDs etc.) mit Leben gef�llt werden
	});
}

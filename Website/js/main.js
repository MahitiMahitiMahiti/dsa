function loadJsonFromFS(filename){
	var json = $.getJSON(filename, function(data){
			console.log(data);
	});
}
	
function loadJsonFromFS(filename){
	var json = $.getJSON(filename);
    var data = eval("(\" +json.responseText + \")");
	console.log(data);
}

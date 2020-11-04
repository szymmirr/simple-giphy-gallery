function search(){
	$(document).ready(function(){
		$("#search-button").click(function(){
			$.getJSON('https://api.giphy.com/v1/gifs/search?api_key=izAken22XPwXdfbsLrru5XNqxVLXDVyS&q=' + $("#search-input").val() + '&limit=' + $("select#limit-select").val() + '&offset=0&rating=G&lang=en', function(result){
				$("#gifs").empty();
				if(result.data.length > 0){
					$.each(result.data, function(){
						$("#gifs").append('<img src="' + this.images.fixed_height.url + '" style="margin-bottom: 4px; margin-left: 4px">');
					});
				}
				else{
					$("#gifs").append('<p style="margin-left: 10px">No results</p>');
				}
			});
		});
	});
}

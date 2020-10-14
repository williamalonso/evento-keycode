$(document).ready(function(){
	$(":text").keyup(function(e){
		$("#msg").text( 
			"Código KeyCode digitado: " + e.which
		);
	});
});

//Check Off Specific Todos By Clicking 
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})
// Deleting the todos
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})
$("input[type='text']").keypress(function(event){
	if(event.which == 13){
		// Getting new TODO from input textfield
		var newTodo = $(this).val();
		// Print this New Todo as the next li
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + newTodo + "</li>");
		// Clearing the Input Field after printing the todo
		$(this).val("");
	}
})
$("h3 i").on("click", function(){
	$("input[type='text']").toggleClass("plus");
})
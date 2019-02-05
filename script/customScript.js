var modalContainer = document.getElementById("modalContainer");


function openModal(id,recipeNumber) {
	$(id).show();
 


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readyState === 4) {
		var recipe = JSON.parse(xhr.responseText);
        var recipeHTML = "<span onclick='closeModal()'>" + "X" + "</span>";
        recipeHTML += "<h1 class='recipe'>" + recipe[recipeNumber].name + "</h1>";
        recipeHTML += "<h1 class='recipe'>" + "Ingredients: " + recipe[recipeNumber].ingredients + "</h1>";
        recipeHTML += "<hr>";
        recipeHTML += "<h1 class='recipe'>" + recipe[recipeNumber].steps + "</h1>";
  console.log(recipeHTML);
    modalContainer.insertAdjacentHTML('beforeend', recipeHTML);
   
    
  };
};
  
xhr.open('GET', 'data/recipe.json');
xhr.send();
  
  
}
  
function closeModal() {
	$(".modal").hide();
  $("#modalContainer").empty();
  
}
  
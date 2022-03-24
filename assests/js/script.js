
var fetchFoodButton= document.querySelector(".fetchFoodApi");
var fetchBeerButton=document.querySelector(".fetchBeerApi");
var recipesDataDisplay= document.querySelector(".recipesDisplay");
var selectCuisineInput= document.querySelector("#selectCuisineStyle")
var selectDietInput= document.querySelector("#selectDietLabel")

console.log(selectCuisineInput)
console.log(selectDietInput)

var getFoodApi = function(){
    var apiKey = "76c7e3b4872ca96f1dc9c65c67c2a12d";
    var apiId = "2df65b98";
    var userText = 
    var requestUrl= "https://api.edamam.com/search?q=chicken&app_id=2df65b98&app_key=76c7e3b4872ca96f1dc9c65c67c2a12d"
    
    fetch(requestUrl)
    .then(function(response){
        console.log(response)
        response.json().then(function(data) {
            console.log(data);
            displayRecipes(data);
        });
        
    });

};


 function getBeersApi (){
    var requestUrl= "https://api.punkapi.com/v2/beers";
    
    fetch(requestUrl)
    .then(function(response){
        console.log(response)
        return response.json();
        
    })
 .then(function(data){
     for(var i=0;i<data.length;i++){
         console.log(data[i])
     }
 })
}

var displayRecipes = function () {
   document.getElementById("recipe").textContent = recipe.cuisineType
};


document.getElementById("search").addEventListener("click",getFoodApi);



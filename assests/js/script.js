
var fetchFoodButton= document.querySelector("#fetchFoodApi");
var fetchBeerButton=document.querySelector("#fetchBeerApi");
var recipesDataDisplay= document.querySelector(".recipesDisplay");
var selectCuisineInput= document.querySelector("#selectCuisineStyle")
var selectDietInput= document.querySelector("#selectDietLabel")

var getFoodApi= function  (){
    var requestUrl= "https://api.edamam.com/api/recipes/v2?type=public&q=Data&app_id=4cd7c7b2&app_key=30a6424795a6d890b5099d0e7e386fab";
    
    fetch(requestUrl)
    .then(function(response){
        console.log(response)
        return response.json();
        
    })
 .then(function(data){
    
 for (var i=0;i<data.hits.length;i++){
    var recipeDiv= document.querySelector("#recipe")
    var recipeDivEl= document.createElement("li")
    recipeDivEl.textContent= data.hits[i]
    recipeDiv.appendChild(recipeDivEl)
     console.log(data.hits[i])

 }
    
 })
};
var getBeersApi =  function (){
    var requestUrl= "https://api.punkapi.com/v2/beers";
    
    fetch(requestUrl)
    .then(function(response){
        console.log(response)
        return response.json();
        
    })
 .then(function(data){
    var numbers= Math.floor(Math.random() * 24)
    for (var i=0;i<data.length;i++){
        var beerDiv= document.querySelector("#beer");
        var beerDivEl=document.createElement("li");
        beerDivEl.textContent=data[i]
        beerDiv.appendChild(beerDivEl);
    
     console.log(data[i]);
     console.log(numbers)
    
    }
 });


}


fetchFoodButton.addEventListener("click",getFoodApi());
fetchBeerButton.addEventListener("click",getBeersApi());



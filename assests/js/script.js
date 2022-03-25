
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
    console.log("food", data.hits);
 for (var i=0;i<data.hits.length;i++){
    var recipeDiv= document.querySelector("#recipe")
    var recipeDivEl= document.createElement("li")
    recipeDivEl.textContent= data.hits[i].recipe.label
    recipeDiv.appendChild(recipeDivEl)
     console.log("data hits", data.hits[i])

 }
    
 })
};
  



 
var  getBeersApi = function (){
    var requestUrl= "https://api.punkapi.com/v2/beers";
    
    fetch(requestUrl)
    .then(function(response){
        console.log(response)
        return response.json();
        
    })
 .then(function(data){
    var numbers= Math.floor(Math.random() * 24)
    for (var i=0;i<data.length;i++){
        if(numbers===data[i].id){
        var beerDiv= document.querySelector("#beer");
        var beerDivEl=document.createElement("li");
        var beerImageEl=document.createElement("img")
        beerImageEl.setAttribute("src", data[i].image_url)
        beerDivEl.textContent=data[i].name + " - " + data[i].tagline
        beerDiv.appendChild(beerDivEl); 
        beerDivEl.appendChild(beerImageEl);

        };  
     console.log(data[i]);
     console.log(numbers)
    
    }
 });
};







fetchFoodButton.addEventListener("click",getFoodApi());
fetchBeerButton.addEventListener("click",getBeersApi());




var fetchFoodButton= document.querySelector(".fetchFoodApi");
var fetchBeerButton=document.querySelector(".fetchBeerApi");
var recipesDataDisplay= document.querySelector(".recipesDisplay");
var selectCuisineInput= document.querySelector("#selectCuisineStyle")
var selectDietInput= document.querySelector("#selectDietLabel")

console.log(selectCuisineInput)
console.log(selectDietInput)

function getFoodApi (){
    var requestUrl= "https://api.edamam.com/api/recipes/v2?type=public&q=Data&app_id=4cd7c7b2&app_key=30a6424795a6d890b5099d0e7e386fab";
    
    fetch(requestUrl)
    .then(function(response){
        console.log(response)
        return response.json();
        
    })
 .then(function(data){
     for(var i=0;i<data.hits.length;i++)
    console.log(data.hits[i]);
    
   
    
    
 })
}
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
fetchFoodButton.addEventListener("click",getFoodApi());
fetchBeerButton.addEventListener("click",getBeersApi());

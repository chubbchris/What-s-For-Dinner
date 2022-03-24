
var fetchButton= document.querySelector(".fetchApi")
var recipesDataDisplay= document.querySelector(".recipesDisplay")

function getapi (){
    var requestUrl= "https://api.edamam.com/api/recipes/v2?type=public&q=Data&app_id=4cd7c7b2&app_key=30a6424795a6d890b5099d0e7e386fab";
    
    fetch(requestUrl)
    .then(function(response){
        console.log(response)
        return response.json();
        
    })
 .then(function(data){
     console.log(data)
 })
 

  
        

}
fetchButton.addEventListener("click",getapi())



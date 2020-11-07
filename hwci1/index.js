const url = "https://www.themealdb.com/api/json/v1/1/random.php"
let getMeal = document.getElementById("getmeal")
let mealDetail = document.getElementById("mealdetail")


async function getData(){
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    console.log(data.meals[0].strYoutube)
    let youtubeurl = data.meals[0].strYoutube
    let embedlink =youtubeurl.replace("watch?v=","embed/")

    mealDetail.innerHTML=`
    <div id = "head">
    <div id ="p1">
        <img id="pic" src="${data.meals[0].strMealThumb}">
        <h3>Category:</h3>
        <p id="category">${data.meals[0].strCategory}</p>
        <h3>Area:</h3> <p id="area">${data.meals[0].strArea}</p>
    </div>
    <div id ="p2">
        <h3 id="name"><label for="instruction">${data.meals[0].strMeal}</label></h3>
        <p id="instruction">${data.meals[0].strInstructions}</p>
    </div>
    </div>  
    <h3>Ingredients:</h3> 
    <div id = "body">

        <ul>
        <li id="1">${data.meals[0].strIngredient1} - ${data.meals[0].strMeasure1} </li>
        <li id="2">${data.meals[0].strIngredient2} - ${data.meals[0].strMeasure2} </li>
        <li id="3">${data.meals[0].strIngredient3} - ${data.meals[0].strMeasure3} </li>
        <li id="4">${data.meals[0].strIngredient4} - ${data.meals[0].strMeasure4} </li>
        <li id="5">${data.meals[0].strIngredient5} - ${data.meals[0].strMeasure5} </li>
        <li id="6">${data.meals[0].strIngredient6} - ${data.meals[0].strMeasure6} </li>
        <li id="7">${data.meals[0].strIngredient7} - ${data.meals[0].strMeasure7} </li>
        <li id="8">${data.meals[0].strIngredient8} - ${data.meals[0].strMeasure8} </li>
        <li id="9">${data.meals[0].strIngredient9} - ${data.meals[0].strMeasure9} </li>
        <li id="10">${data.meals[0].strIngredient10} - ${data.meals[0].strMeasure10} </li>
        <li id="11">${data.meals[0].strIngredient11} - ${data.meals[0].strMeasure11} </li>
        <li id="12">${data.meals[0].strIngredient12} - ${data.meals[0].strMeasure12} </li>
        <li id="13">${data.meals[0].strIngredient13} - ${data.meals[0].strMeasure13} </li>
        <li id="14">${data.meals[0].strIngredient14} - ${data.meals[0].strMeasure14} </li>
        <li id="15">${data.meals[0].strIngredient15} - ${data.meals[0].strMeasure15} </li>
        <li id="16">${data.meals[0].strIngredient16} - ${data.meals[0].strMeasure16} </li>
        <li id="17">${data.meals[0].strIngredient17} - ${data.meals[0].strMeasure17} </li>
        <li id="18">${data.meals[0].strIngredient18} - ${data.meals[0].strMeasure18} </li>
        <li id="19">${data.meals[0].strIngredient19} - ${data.meals[0].strMeasure19} </li>
        <li id="20">${data.meals[0].strIngredient20} - ${data.meals[0].strMeasure20} </li>
        </ul>
    </div>
    <div id="bot">
        <h3>Videos</h3>
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src="${embedlink}"
        frameborder="0">
        </iframe>
    </div>
    `
    for(i=1;i<=20;i++){
        if(document.getElementById(i).innerHTML.length<7){
            console.log(document.getElementById(i).innerHTML)
            document.getElementById(i).style.display="none";
        }
    }
}

getMeal.addEventListener('click',function(){
    getData(url)
})
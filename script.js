const tag1 = document.querySelector('h1')
let data;
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then((res) => res.json())
.then((res)=>
    // showOnScreen(data)
    showOnScreen(res)
)

function showOnScreen(data) {
    // data = data.meals
        const div = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('h1')
        const bigdiv = document.querySelector('.hello')
        console.log(data.meals[0])
        image.src  = `${data.strMealThumb}`
        name.textContent = `${data.strMeal}`
        div.append(image)
        div.append(name)
        bigdiv.appendChild(div)
}
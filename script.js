const tag1 = document.querySelector('h1')

fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Teriyaki Chicken Casserole')
.then((res) => res.json())
.then((res)=>
    // showOnScreen(data)
    showOnScreen(res)
)

function showOnScreen(some) {
    // data = data.meals4
    let data = some.meals[0]
        const div = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('h1')
        const instruction = document.createElement('pre')
        const tags = document.createElement('h3')
        const bigdiv = document.querySelector('.hello')
        const ingredient = document.createElement('div')
        console.log(data)
        image.src  = `${data.strMealThumb}`
        tags.textContent = `${data.strTags}`
        name.textContent = `${data.strMeal}`
        instruction.textContent = `${data.strInstructions}`
        displayRecipe(data)
        div.append(image)
        div.append(name)
        div.append(instruction)
        div.append(tags)
        bigdiv.appendChild(div)
}

function displayRecipe(data) {
    
}
const tag1 = document.querySelector('h1')
const query = document.querySelector('.query')
const text = ''

function giveData() {

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Teriyaki Chicken Casserole`)
.then((res) => res.json())
.then((res)=>
    // showOnScreen(data)
    showOnScreen(res)
)
}

function showOnScreen(some) {
    // data = data.meals4
    let data = some.meals[0]
        const div = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('h1')
        const instruction = document.createElement('pre')
        const tags = document.createElement('h3')
        const bigdiv = document.querySelector('.jsmagic')
        const ingredient = document.createElement('div')
        const ingredientHeading = document.createElement('h1')
        console.log(data)
        image.src  = `${data.strMealThumb}`
        tags.textContent = `${data.strTags}`
        name.textContent = `${data.strMeal}`
        instruction.textContent = `${data.strInstructions}`
        ingredientHeading.textContent = "Ingredients : "
        ingredient.append(ingredientHeading)
        displayIngredients(data, ingredient)
        div.append(image)
        div.append(name)
        div.append(instruction)
        div.append(tags)
        div.append(ingredient)
        bigdiv.appendChild(div)
}

function displayIngredients(data, ingredient) {
    for(let i = 1; i < 20; i++) {
           let str = `strIngredient`
            const p = document.createElement('p')
            str += i;
            if(!data[str]) {
                continue
            }
            p.textContent =  `${data[str]}`
        
        ingredient.appendChild(p)
            str = ''
    }
}


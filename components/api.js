import { key } from '../apiKey'

export default async function findByIngredients(ingredients,numOfRecipies) {
    const url = 'https://api.spoonacular.com/recipes/findByIngredients'
    const data = await fetch(`${url}?apiKey=${key}&ingredients=${ingredients}&number=${numOfRecipies}&ignorePantry=true`)
    .then(
        response => response.json())
    .then(data => {
            console.log(data)
            return data;
        });

    return data;
}
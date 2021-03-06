import axios from 'axios';

const url = 'http://localhost:5000/api/recipes/';

class RecipeService {
    // GET Recipes
    static getRecipes() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(recipe => ({
                        ...recipe,
                        createdAt: new Date(recipe.createdAt),
                        updatedAt: new Date(recipe.updatedAt)
                    }))
                );
            } catch(err) {
                reject(err);
            }
        });
    }

    // GET Single Recipe
    static getRecipe(id) {
        return axios.get(`${url}${id}`)
    }

    // CREATE Recipe
    static insertRecipe(title, ingredients, directions, servings, prepTime, cookTime, totalTime) {
        return axios.post(url, {
            title,
            ingredients,
            directions,
            servings,
            prepTime,
            cookTime,
            totalTime
        });
    }
    
    // UPDATE Recipe
    static updateRecipe(title, ingredients, directions, servings, prepTime, cookTime, totalTime) {
        return axios.put(url, {
            title,
            ingredients,
            directions,
            servings,
            prepTime,
            cookTime,
            totalTime
        });
    }
    
    // DELETE Recipe
    static deleteRecipe(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default RecipeService;
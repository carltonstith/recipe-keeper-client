<template>
    <div>
        <h1>Create Recipe</h1>
        <div class="create-recipe">
            <label for="title">Title: </label>
            <input type="text" id="title" v-model="title" placeholder="Enter a title..."><br>

            <label for="ingredients">Ingredients: </label>
            <input type="text" id="ingredients" v-model="ingredients" placeholder="Enter your ingredients..."><br>

            <label for="directions">Directions: </label>
            <input type="text" id="directions" v-model="directions" placeholder="Enter your directions..."><br>

            <label for="servings">Servings: </label>
            <input type="text" id="servings" v-model="servings" placeholder="Enter how many servings..."><br>

            <label for="prepTime">Prep Time: </label>
            <input type="text" id="prepTime" v-model="prepTime" placeholder="Enter the preparation time..."><br>

            <label for="cookTime">Cook Time: </label>
            <input type="text" id="cookTime" v-model="cookTime" placeholder="Enter the cook time..."><br>

            <label for="totalTime">Total Time: </label>
            <input type="text" id="totalTime" v-model="totalTime" placeholder="Enter the total time..."><br>

            <button v-on:click="createRecipe">Create Recipe</button>
        </div>

        <hr>

        <p class="error" v-if="error">{{ error }}</p>
    </div>
</template>
<script>
import RecipeService from '../RecipeService';
export default {
    name: 'create',
    data() {
        return {
            recipes: [],
            error: '',
            title: '',
            ingredients: '',
            directions: '',
            servings: '',
            prepTime: '',
            cookTime: '',
            totalTime: ''
        }
    },
    async created() {
        try {
            this.recipes = await RecipeService.getRecipes();
        } catch (err) {
            this.error = err.message;
        }
    },
    methods: {
        async createRecipe() {
            await RecipeService.insertRecipe(this.title, this.ingredients, this.directions, this.servings,this.prepTime, this.cookTime, this.totalTime)
            this.recipes = await RecipeService.getRecipes();
            this.title = '',
            this.ingredients = '',
            this.directions = '',
            this.servings = '',
            this.prepTime = '',
            this.cookTime = '',
            this.totalTime = '',
            alert('recipe created')
        }
    },
}
</script>
<style lang="scss">
    
</style>
<template>
  <div class="hello">
    <h1>All Recipes</h1>
    <!-- <div class="create-recipe">
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

      <button v-on:click="createRecipe">Post Recipe</button>
    </div>

    <hr> -->

    <p class="error" v-if="error">{{ error }}</p>

    <div class="recipes-container">
      <div 
        class="recipe"
        v-for="(recipe, index) in recipes"
        v-bind:item="recipe"
        v-bind:index="index"
        v-bind:key="recipe._id">

        <label for="title">Title: </label>
            <input type="text" id="title" v-model="recipe.title" placeholder="Enter a title..." readonly><br>

            <label for="ingredients">Ingredients: </label>
            <input type="text" id="ingredients" v-model="recipe.ingredients" placeholder="Enter your ingredients..." readonly><br>

            <label for="directions">Directions: </label>
            <input type="text" id="directions" v-model="recipe.directions" placeholder="Enter your directions..." readonly><br>

            <label for="servings">Servings: </label>
            <input type="text" id="servings" v-model="recipe.servings" placeholder="Enter how many servings..." readonly><br>

            <label for="prepTime">Prep Time: </label>
            <input type="text" id="prepTime" v-model="recipe.prepTime" placeholder="Enter the preparation time..." readonly><br>

            <label for="cookTime">Cook Time: </label>
            <input type="text" id="cookTime" v-model="recipe.cookTime" placeholder="Enter the cook time..." readonly><br>

            <label for="totalTime">Total Time: </label>
            <input type="text" id="totalTime" v-model="recipe.totalTime" placeholder="Enter the total time..." readonly><br>


        <!-- <p class="title">Title: {{ recipe.title }}</p>
        <p class="ingredients">Ingredients: {{ recipe.ingredients }}</p>
        <p class="directions">Directions: {{ recipe.directions }}</p>
        <p class="servings">Servings: {{ recipe.servings }}</p>
        <p class="prepTime">Prep Time: {{ recipe.prepTime }}</p>
        <p class="cookTime">Cook Time: {{ recipe.cookTime }}</p>
        <p class="totalTime">Total Time: {{ recipe.totalTime }}</p>
        <p>This recipe was created on: {{ `${recipe.createdAt.getMonth()}/${recipe.createdAt.getDate()}/${recipe.createdAt.getFullYear()}` }}</p>
        <p>This recipe was updated on: {{ `${recipe.updatedAt.getMonth()}/${recipe.updatedAt.getDate()}/${recipe.updatedAt.getFullYear()}` }}</p> -->

        <button @click="deleteRecipe(recipe._id)">Delete Recipe</button>
        <router-link :to="{name: 'edit', params: {id: recipe._id}}">Edit Recipe</router-link>
        <!-- <button @click="updateRecipe(recipe._id)">Edit Recipe</button> -->

      </div>
    </div>
    
  </div>
</template>

<script>
import RecipeService from '../RecipeService';

export default {
  name: 'RecipeComponent',
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
      await RecipeService.insertRecipe(this.title, this.ingredients, this.directions, this.servings, this.prepTime, this.cookTime, this.totalTime)
      this.recipes = await RecipeService.getRecipes();
      this.title = '',
      this.ingredients = '',
      this.directions = '',
      this.servings = '',
      this.prepTime = '',
      this.cookTime = '',
      this.totalTime = ''
    },
    async deleteRecipe(id) {
      await RecipeService.deleteRecipe(id);
      this.recipes = await RecipeService.getRecipes();
    },
    async updateRecipe(id) {
      await RecipeService.updateRecipe(id);
      this.recipes = await RecipeService.getRecipes();
    }
  },
  // watch: {
  //   recipes(newRecipe) {
  //     localStorage.title = newRecipe
  //   }
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

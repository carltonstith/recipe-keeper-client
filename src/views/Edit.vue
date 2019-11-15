<template>
    <div class="edit">
        <button v-on:click="navigate()">See All Recipes</button>
        <h1>Edit Recipe</h1>
        <div v-for="(recipe, index) in recipe" v-bind:item="recipe" v-bind:index="index" v-bind:key="recipe._id">
            <form @submit.prevent="updateRecipe">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="recipe.title" name="title" placeholder="Enter recipe title">

            <label for="ingredients">Ingredients</label>
            <input type="text" id="ingredients" v-model="recipe.ingredients" name="ingredients" placeholder="Enter recipe ingredients">

            <label for="directions">Directions</label>
            <input type="text" id="directions" v-model="recipe.directions" name="directions" placeholder="Enter recipe directions">

            <label for="servings">Servings</label>
            <input type="text" id="servings" v-model="recipe.servings" name="servings" placeholder="Enter recipe servings">

            <label for="prepTime">Prep Time</label>
            <input type="text" id="prepTime" v-model="recipe.prepTime" name="prepTime" placeholder="Enter recipe prep time">

            <label for="cookTime">Cook Time</label>
            <input type="text" id="cookTime" v-model="recipe.cookTime" name="cookTime" placeholder="Enter recipe Cook Time">

            <label for="totalTime">Total Time</label>
            <input type="text" id="totalTime" v-model="recipe.totalTime" name="totalTime" placeholder="Enter recipe Total Time">

            <div>
                <button class="btn btn-success" type="submit" @click="updateRecipe(id)"> Edit Recipe </button>
            </div>
        </form>
        </div>
    </div>
</template>
<script>
import RecipeService from '../RecipeService';
import router from "../router";
import axios from 'axios'

export default {
  name: 'edit',
  data() {
    return {
      id: 0,
      recipe: {},
      message: ''
    }
  },
  mounted() {
      //this.getRecipe()
  },
  async created() {
    // try {
    //  this.recipes = await RecipeService.getRecipes();
    //  this.recipe = this.recipes
    // } catch (err) {
    //   this.error = err.message;
    // }

    this.id = this.$route.params.id;
    this.getRecipe()
  },
  methods: {
    async updateRecipe(id) {
        await RecipeService.updateRecipe(id);
        this.recipes = await RecipeService.getRecipes();
    },
    
    getRecipe() {
    //    try {
    //        const response =  RecipeService.getRecipe(this.$route.params.id)
    //        this.recipe = response.data
    //    } catch (err) {
    //        this.err = err.message
    //    }
    axios
        .get(`http://localhost:5000/api/recipes/${this.id}`)
        .then(data => (this.recipe = data.data));
    },
    
    navigate() {
        router.go(-1)
    }
  }
}
</script>
<style lang="scss">
    
</style>
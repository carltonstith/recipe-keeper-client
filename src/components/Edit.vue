<template>
    <div>
        <button v-on:click="navigate()">See All Recipes</button>
        <h1>Edit page</h1>
        <div></div>
    </div>
</template>
<script>
import RecipeService from '../RecipeService';
import router from "../router";

export default {
    name: 'edit',
    data() {
        return {
            recipes: [],
        }
    },
    async created() {
        try {
            this.recipes = await RecipeService.getRecipes();
        } catch (err) {
           this.error = err.message;
        }

        this.id = this.$route.params.id;
    },
    methods: {
        navigate() {
            router.go(-1)
        }
    }
}
</script>
<style lang="scss">
    
</style>
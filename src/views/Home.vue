<template>
  <div class="home">
    <RecipeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeComponent from '@/components/RecipeComponent.vue'

export default {
  name: 'home',
  components: {
    RecipeComponent
  }
}
</script>

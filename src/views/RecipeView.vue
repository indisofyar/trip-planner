<template>
  <div class="about">
    <h1>Recipes</h1>
    {{ latestRecipes }}
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      latestRecipes: [],
    }
  },
  mounted() {
    this.getLatestRecipes()
  },
  methods: {
    getLatestRecipes: function(){
      axios
        .get('/api/v1/latest-recipes')
        .then(response => {
          this.latestRecipes = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
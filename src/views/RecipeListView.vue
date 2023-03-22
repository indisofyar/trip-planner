<template>
  <div class="about">
    <input type="text" class="input" placeholder="Search" name="query" v-model="searchInput">
    <button class="btn btn-primary" @click="performSearch"><i class="bi bi-search"></i></button>
    <h1>Recipes</h1>
    <span v-if="query">{{recipes.length}} results for {{ query }}</span>
    <div v-for="recipe in recipes">
      <span style="font-weight: 800px;">{{ recipe.name }}</span>
    </div> 
    <p v-if="errors" class="error">{{ errors }}</p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      recipes: [],
      latestRecipes: [],
      query: '',
      errors: null,
      searchInput: '',
    }
  },
  mounted() {
    this.getLatestRecipes()
    document.title = 'Recipes | Recipe Planner'
  },
  methods: {
    async getLatestRecipes(){
      this.$store.commit('setLoading', true);
      await axios
        .get('/api/v1/latest-recipes')
        .then(response => {
          this.recipes = response.data
        })
        .catch(error => {
          console.log(error)
        })
        this.$store.commit('setLoading', false);
    },
    async performSearch(){
      this.$store.commit('setLoading', true)
      await axios
        .post('/api/v1/recipes/search/', {query:this.searchInput})
        .then(response => {
          this.recipes = response.data;
          this.query=this.searchInput;
        })
        .catch(error => {
          console.log({query:this.searchInput})
          this.errors = error
        })
      this.$store.commit('setLoading', false)
    },
  }
}
</script>
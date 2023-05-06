<template>
  <section class="about container">
    <div class="row g-2">
      
      <div class="col-12">
        <h1 class="">Recipes</h1>
        <button class="btn btn-primary" @click="$store.state.selectedPopup = 'AddRecipe'">Add new recipe</button>
      </div>
      
      <div class="col-md-6 d-flex">
        <input type="text" class="input form-control" placeholder="Search" name="query" v-model="searchInput"
          style="border-bottom-right-radius: 0; border-top-right-radius: 0;">
        <button class="btn btn-primary" @click="performSearch"
          style="border-bottom-left-radius: 0; border-top-left-radius: 0;"><i class="bi bi-search"></i></button>
      </div>
    </div>
    <div class="row mt-4">
      <span v-if="query">{{ recipes.length }} results for {{ query }}</span>
      <div v-for="recipe in recipes">
        <RecipeLong :recipe-of-concern="recipe" :select="selectRecipe" style="margin-bottom: 15px;"/>
      </div>
      <p v-if="errors" class="error">{{ errors }}</p>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
import RecipeLong from '../components/recipe/RecipeLong.vue'


export default {
  components: { RecipeLong },
  data() {
    return {
      recipes: [],
      latestRecipes: [],
      query: '',
      errors: null,
      searchInput: '',
    }
  },
  props: ['selectRecipe'],
  mounted() {
    this.getLatestRecipes()
    document.title = 'Recipes | Recipe Planner'
  },
  methods: {
    async getLatestRecipes() {
      this.$store.commit('setLoading', true);
      await axios
        .get('/api/v1/latest-recipes/')
        .then(response => {
          this.recipes = response.data
        })
        .catch(error => {
          console.log(error)
        })
      this.$store.commit('setLoading', false);
    },
    async addRecipe() {
      this.$store.commit('setLoading', true);
      await axios
        .get('/api/v1/add-recipe/')
        .then(response => {
          // this.recipes = response.data
        })
        .catch(error => {
          console.log(error)
        })
      this.$store.commit('setLoading', false);
    },
    async performSearch() {
      this.$store.commit('setLoading', true)
      await axios
        .post('/api/v1/recipes/search/', { query: this.searchInput })
        .then(response => {
          this.recipes = response.data;
          this.query = this.searchInput;
        })
        .catch(error => {
          console.log({ query: this.searchInput })
          this.errors = error
        })
      this.$store.commit('setLoading', false)
    },
  }
}
</script>
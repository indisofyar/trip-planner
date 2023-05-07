<template>
  <div class="col-12">


  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'Recipe',
  data() {
    return {
      recipe: []
    }
  },
  mounted() {
    this.getRecipe()
  },
  methods:{
    getRecipe: function(){
      const recipe_slug = this.$route.params.recipe_slug;
    }
  }
}
</script>
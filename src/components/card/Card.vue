<template>
    <div class="col-md-8 offset-md-2 card mb-5">
        <slot></slot>
    </div>
   
</template>
<script>
import axios from 'axios';


export default {
    name: 'RecipeLong',
    props: ['select'],
    data() {
        return {
            error: null,
            response: null,
            newRecipe: false,
            selectRecipe: this.select,
            recipe: this.recipeOfConcern,
            deleted: false,
        }
    },
    props:['recipeOfConcern'],
    methods:{
        deleteRecipe: function(){
            axios
                .delete('/api/v1/delete-recipe/', {data: {id: this.recipe.pk}})
                .then(response => {
                    this.$store.commit('refresh')
                })
                .catch(error =>
                    this.error = error.data
                )
        },
        setRecipe: function(){
            const vm = this;
            axios
                .post('/api/v1/set-day/', {day: this.$store.state.recipeDay, id: this.recipe.pk})
                .then(response => {
                    this.$store.commit('selectPopup')
                    this.$store.commit('refresh')
                    
                })
                .catch(error =>
                    this.error = error.data
                )
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
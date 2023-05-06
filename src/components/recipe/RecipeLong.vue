<template>
    <div style="background-color: white; width: 100%; height: 125px; display: flex;" v-if="!deleted">
        <img :src="recipe.get_image" style="width: 125px; height: 125px; object-fit: cover; margin-right: 15px;">
        <div>
                        <h2>{{ recipe.name }}</h2>
            <div class="mb-2">
                <span>{{ recipe.time }}</span> <span v-if="recipe.serves">Serves {{ recipe.serves }}</span> <a :href="recipe.url" v-if="recipe.url">External link</a>
               
            </div>
            <button v-if="$store.state.settingDay" class="btn btn-success me-1" @click="setRecipe">select</button>
            <button class="btn btn-outline-secondary me-1">View recipe</button>
            <button class="btn btn-outline-danger" @click="deleteRecipe">Delete recipe</button>
        </div>
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
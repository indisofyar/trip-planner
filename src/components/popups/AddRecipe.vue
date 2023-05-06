<template>
    <div class="popup py-4">
        <div class="popup__header">
            <h2 class="popup__title">Add/edit Recipe</h2>
        </div>
    
        <div class="popup__body">
            <div class="popup__body__content  ">
                <div class="popup__body__content__item">
                    <label for="recipe-url">Recipe URL</label>
                    <div class="d-flex">
                        <input type="text" id="recipe-url" class="form-control" v-model.lazy="recipe.url"
                            v-on:keyup.enter="addRecipe"
                            style="border-bottom-right-radius: 0px;border-top-right-radius: 0;" />
                        <button class="btn btn-primary" @click="addRecipe"
                            style="border-bottom-left-radius:0px; border-top-left-radius: 0px;">Find</button>
                    </div>
                    <span class="text-secondary">Supported sites: BBC Good Food, Taste</span>
                </div>
                <div :class="{ 'opacity-0': newRecipe }">
                    <div class="popup__body__content__item">
                        <label for="recipe-name">Recipe Name</label><br>
                        <input type="text" id="recipe-name" class="form-control" v-model="recipe.name" />
                    </div>

                    <div class="popup__body__content__item">
                        <label for="recipe-image">Recipe Image</label><br>
                        <img style="width:100px; height:100px;" :src="recipe.image" alt="">
                        <!-- <input type="url"  id="recipe-image" class="form-control"  v-model.lazy="recipe.image.url"/> -->
                    </div>
                    <div class="popup__body__content__item">
                        <label for="recipe-ingredients">Recipe Ingredients</label>
                        <ul>
                            <li v-for="(ingredient, index) in recipe.ingredients">{{ ingredient }}</li>
                        </ul>
                    </div>
                    <div class="popup__body__content__item">
                        <label for="recipe-instructions">Recipe Instructions</label>
                        <ol>
                            <li v-for="method in recipe.method">{{ method }}</li>
                        </ol>
                    </div>
                    <div class="popup__body__content__item">
                        <label for="recipe-servings">Recipe Servings</label>
                        <input type="text" class="form-control" id="recipe-servings" v-model="recipe.serves" />
                    </div>
                    <div class="popup__body__content__item">
                        <label for="recipe-time">Recipe Time</label>
                        <input type="text" class="form-control" id="recipe-time" v-model="recipe.time" />
                    </div>
                    <div class="popup__body__content__item">
                        <label for="recipe-cuisine">Recipe Cuisines</label>
                        <div class="d-flex">
                            <button v-for="(cuisine, index) in cuisines" class="btn btn-outline-primary mx-1 text-center"
                                :class="{ 'btn-primary': cuisine.is_selected, 'text-white': cuisine.is_selected }"
                                @click="addRemoveCuisine(cuisine, index)">{{ cuisine.name }}<i
                                    class="bi bi-circle ms-1" v-if="!cuisine.is_selected"></i>
                                <i class="bi bi-check-circle ms-1" v-else></i>
                            </button>

                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button @click="saveRecipe" class="btn btn-success">Save recipe</button>
                    </div>
                    <span class="error">{{ error }}</span>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'AddRecipe',
    data() {
        return {
            recipe: {
                name: '',
                url: '',
                image: '',
                description: '',
                ingredients: '',
                instructions: '',
                servings: '',
                time: '',
                cuisines: []
            },
            error: null,
            response: null,
            newRecipe: false,
            cuisines: [],
        }
    },
    mounted() {
        if (this.recipe.name === '') {
            this.newRecipe = true
        }
        this.getCategories()
    },
    methods: {
        getCategories: function () {
            axios
                .get("/api/v1/cuisines")
                .then(response => {
                    this.cuisines = response.data;
                })
                .catch(error => {
                    this.errors = error;
                });
        },
        addRemoveCuisine: function(cuisine, index){
            // Check status 
            const vm = this;
            cuisine.is_selected = !cuisine.is_selected; 
            if(vm.recipe.cuisines == null){
                vm.recipe.cuisines = []
            }
            if(cuisine.is_selected){
                vm.recipe.cuisines.push(cuisine)
            } else {
                vm.recipe.cuisines.splice(index, 1);
            }
        },
        async addRecipe() {
            this.$store.commit('setLoading', true);
            await axios
                .post('/api/v1/get-recipe/', { url: this.recipe.url })
                .then(response => {
                    this.recipe = response.data;
                    this.newRecipe = false;
                })
                .catch(error => {
                    console.log(error)
                })
            this.$store.commit('setLoading', false)
        },
        async saveRecipe() {
            this.$store.commit('setLoading', true);
            await axios
                .post('/api/v1/save-recipe/', { recipe: this.recipe })
                .then(response => {
                    this.$store.commit('selectPopup')
                })
                .catch(error => {
                    console.log(error)
                })
            this.$store.commit('setLoading', false)
        }
    }
}
</script>
<style lang="scss" scoped>
.popup-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}

.popup__body__content__item {
    margin-bottom: 20px;
}
</style>
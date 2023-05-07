<template>
    <div class="popup py-4">
        <div class="popup__header">
            <h2 class="popup__title">Place bet</h2>
        </div>
    
        <div class="popup__body">
            <div>
                <label>Crypto address</label>
                <input type="text" class="form-control" placeholder="Enter crypto address"/>
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
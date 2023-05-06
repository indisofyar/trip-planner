<template>
  <div class="popup-container d-flex justify-content-center align-center">
    <div class="position-absolute top-0 right-0 left-0 bottom-0" @click="$store.state.selectedPopup = null" style="z-index: 0; width: 100%; height: 100%;">
    </div>
    <div class="container my-auto position-relative" @click="stopPro" style="z-index:1">
      <div class="row  bg-light p-4">
        <div class="col-12" v-if="$store.state.selectedPopup == 'AddRecipe'">
          <AddRecipe></AddRecipe>
        </div>
        <div class="col-12" v-if="$store.state.selectedPopup == 'SelectRecipe'">
          <RecipeListView :select-recipe="true"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import RecipeListView from '@/views/RecipeListView.vue';
import AddRecipe from './popups/AddRecipe.vue';

export default {
    name: "PopupGlobal",
    components: { AddRecipe,  RecipeListView },
    methods: {
        closePopup() {
            this.$store.commit('state.setSelectedPopup', null);
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
  overflow: scroll;

}
</style>
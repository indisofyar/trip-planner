<template>
  <div class="popup-container d-flex justify-content-center align-center">
    <div class="position-absolute top-0 right-0 left-0 bottom-0" @click="$store.state.selectedPopup = null" style="z-index: 0; width: 100%; height: 100%;">
    </div>
    <div class="container my-auto position-relative" @click="stopPro" style="z-index:1">
      <div class="row p-4" style="display: flex; justify-content: center;">
        <div class="col-8 bg-light popup-inner" v-if="$store.state.selectedPopup == 'MakeBet'">
          <MakeBet/>
        </div>
        <div class="col-12" v-if="$store.state.selectedPopup == 'SelectRecipe'">
          
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import AddRecipe from './popups/AddRecipe.vue';
import MakeBet from './popups/MakeBet.vue';

export default {
    name: "PopupGlobal",
    components: { AddRecipe,  MakeBet },
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
  .popup-inner{
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  }

}
</style>
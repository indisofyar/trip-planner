<template>
  <div class="slider">
    <input type="range" v-model="range1" :min="min" :max="max" class="range1" />
    <input type="range" v-model="range2" :min="range1" :max="max" class="range2" />
  </div>
</template>

<script>
export default {
  name: 'MultiRangeSlider',
  data() {
    return {
      range1: 60,
      range2: 480,
      min: 60,
      max: 480,
    };
  },
};
</script>

<style>
.slider {
  display: flex;
  flex-direction: column;
  height: 100%;
}

input[type="range"] {
  width: 100%;
  height: 20px;
  /* -webkit-appearance: none; */
  background-color: #ccc;
  border-radius: 10px;
  outline: none;
  margin-bottom: 10px;
}

input[type="range"]::-webkit-slider-thumb {
  /* -webkit-appearance: none; */
  appearance: none;
  width: 20px;
  height: 20px;
  background-color: #4caf50;
  border-radius: 50%;
  cursor: pointer;
}
</style>

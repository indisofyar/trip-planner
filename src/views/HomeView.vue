<template>
  <section class="mb-2 row">
    <div class="day-container">
      <div v-for="day in allDays" class="day">
        <div class="rounded-1 bg-dark text-white py-1 px-2 d-flex justify-content-between">
          <span style="font-size: 16px;">{{ day.name }}</span>
          <input type="checkbox" class="form-check-input" v-model="day.is_selected">
        </div>
        <div class="day-body bg-light rounded-1">
          <div v-if="day.recipe">
            {{ day.recipe }}
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="row row-cols-2 g-2">
    <div class="col-8 bg-light rounded py-3 px-3 overflow-hidden">
      <h2 class="heading_small">Settings</h2>
      <div class="d-flex">
        Cuisines:
        <button v-for="cuisine in cuisines" class="btn btn-outline-primary mx-1 text-center"
          :class="{ 'btn-primary': cuisine.isSelected, 'text-white': cuisine.isSelected }"
          @click="cuisine.isSelected = !cuisine.isSelected">{{ cuisine.name }}<i class="bi bi-circle ms-1"
            v-if="!cuisine.isSelected"></i>
          <i class="bi bi-check-circle ms-1" v-else></i></button>
      </div>
      <div class="d-flex mt-2">
        Duration: <input type="number" v-model="minTime" class="mx-1 invisible-input"
          :class="{ widen: (minTime > 99) }">minutes - <input type="number" class="mx-1 invisible-input" v-model="maxTime"
          :class="{ widen: (maxTime > 99) }"><span>minutes</span>
      </div>
      <div class="d-flex mt-2">
        Preferences:<div v-for="(preference, index) in preferences" class="btn btn-outline-primary mx-1">{{
          preference.amount }}
          days {{ preference.name }}<i class="bi bi-plus-circle mx-1" @click="add(preference.amount, index)"></i><i
            class="bi bi-dash-circle" @click="subtract(preference.amount, index)"></i></div>
      </div>
      <div class="d-flex justify-content-end mt-1">
        <button class="btn btn-success" @click="generateRecipes">Generate recipes</button>
      </div>
      <div class="d-flex error" v-for="error in errors">
        {{ error }}
      </div>
    </div>
    <div class="col-4 d-flex ps-2">
      <div v-for="quote in quotes['quotes']"
        class="bg-light rounded p-3 text-center d-flex justify-content-center align-items-center overflow-hidden flex-column">
        {{ quote.quote }}
        <em>{{ quote.author }}</em>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import MultiRangeSlider from '@/components/MultiRangeSlider.vue'


export default {
  name: "HomeView",
  data() {
    return {
      allDays: [],
      cuisines: [],
      preferences: [],
      minTime: 10,
      maxTime: 45,
      quotes: [],
      errors: [],
    }
  },
  mounted() {
    this.getAllDays()
    this.getCategories()
    this.getPrefences()
    this.getQuotes()
  },
  methods: {
    add: function (amount, index) {
      if (amount < 7) {
        amount++
      }
      this.preferences[index].amount = amount
    },
    subtract: function (amount, index) {
      if (amount > 0) {
        amount--
      }
      this.preferences[index].amount = amount
    },
    getAllDays: function () {
      axios
        .get('/api/v1/all-days')
        .then(response => {
          this.allDays = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    getCategories: function () {
      axios
        .get('/api/v1/cuisines')
        .then(response => {
          this.cuisines = response.data
        })
        .catch(error => {
          this.errors = error
        })
    },
    getPrefences: function () {
      axios
        .get('/api/v1/all-preferences/')
        .then(response => {
          this.preferences = response.data
        })
        .catch(error => {
          this.errors = error
        })
    },
    getQuotes: function () {
      axios
        .get('https://quotes.rest/qod?language=en')
        .then(response => {
          this.quotes = response.data.contents
        })
        .catch(error => {
          this.errors = error
        })
    },
    async generateRecipes() {
      this.$store.commit('setLoading', true)
      await axios
        .post('/api/v1/generate-recipes/', { days: this.days, cuisines: this.cuisines, preferences:this.preferences, minTime: this.minTime, maxTime: this.maxTime})
        .then(response => {
          this.recipes = response.data;
          this.query = this.searchInput;
        })
        .catch(error => {
          this.errors = error
        })
      this.$store.commit('setLoading', false)
    },
  }
};
</script>
<style lang="scss" scoped>
input {
  &.invisible-input {
    overflow: show;
    width: 24px;
    border: 0;
    background: transparent;

    &.widen {
      width: 34px;
    }

    &:focus {
      border: 0;
      background: transparent;
    }
  }

}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


.day-container {
  width: 100%;
  display: flex;
  gap: 10px;

  .day {
    width: calc(100%/7);

    .day-header {
      background-color: #d3d3d4;
      display: flex;
      justify-content: space-between;
      padding: 4px;
    }

    .day-body {
      padding: 4px;
      margin-top: 8px;
      min-height: 400px;
    }
  }
}
</style>

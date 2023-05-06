import { createStore } from "vuex";

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false,
    isPopup: false,
    selectedPopup: null,
    recipeDay: '',
    settingDay: false,
    toRefresh: false,
    notification: '',
  },
  getters: {},
  mutations: {
    selectPopup(state, popup) {
      if (popup) {
        state.selectedPopup = popup
      } else {
        state.selectedPopup = null
      }
    },
    setNotification(state, notification) {
      if (notification) {
        state.notification = notification
        setTimeout(() => {
          state.notification = '';
        }, "2000");
      } else {
        state.notification = ''
      }
    },
    setRecipeDay(state, day) {
      if (day) {
        state.recipeDay = day
        state.settingDay = true
      } else {
        state.selectedPopup = ''
      }
    },
    setLoading(state, status) {
      state.isLoading = status
    },
    refresh(state) {
      state.toRefresh = true
      setTimeout(() => {
        state.toRefresh = false;
      }, "1000");

    }
  },
  actions: {},
  modules: {},
});

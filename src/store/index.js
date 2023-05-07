import { createStore } from "vuex";

export default createStore({
  state: {
    isAuthenticated: false,
    isLoading: false,
    isPopup: false,
    selectedPopup: null,
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

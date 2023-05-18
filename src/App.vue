<template>
  <div :class="{ 'stop-moving': ($store.state.selectedPopup != null) }">
    <nav class="navbar  px-2"
      style="position: fixed; width: 100%; z-index: 10; height: 64px;">
      <div class="container" style="position: relative; display: flex; flex-wrap: nowrap;">
        <button v-if="showSearch" class="btn nav-bar-button" @click="showSearch = false">
          <i class="bi bi-x"></i>
        </button>
        <div class="nav-bar-left" style="width: 300px; display: flex; align-items: center;" v-if="!showSearch">
          <button class="btn nav-bar-button" v-if="!screenBig && !showSearch" @click="showSidenav = true" style="margin-right: 10px;">
            <i class="bi bi-list"></i>
          </button>
          <router-link to='/'><img src="@/assets/logo.svg" style="height: 35px; margin-right: 10px;"/></router-link>
          <router-link to='/' v-if="screenBig" style="font-size: 22px; text-decoration: none; font-weight: 700; " class="text-dark">Trip Genius</router-link>
          <button class="btn nav-bar-button" v-if="!screenBig && !showSearch" @click="showSearch = true">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <div style="position: absolute; right: 0;" v-if="!showSearch">
          <router-link :to="{ name: 'login' }">
            <button class="btn btn-primary me-2">
              Login
            </button>
          </router-link>
          <router-link :to="{ name: 'sign-up' }" v-if="screenBig">
            <button class="btn btn-outline-primary" type="button">
              Sign up
            </button>
          </router-link>
        </div>
      </div>
    </nav>

    <div style="min-height: 80vh; display: flex; padding: 0; align-items: stretch;">
      <div class="container" style="padding: 64px 16px 16px 16px">
        <router-view />
      </div>
      <PopupGlobal v-if="$store.state.selectedPopup != null"></PopupGlobal>
      <div style="width: 100%; display: flex; justify-content: center;" v-if="$store.state.loading == true">
        <img src="./assets/loading.gif">
      </div>
    </div>
  </div>
</template>
<script>
import PopupGlobal from './components/PopupGlobal.vue';

export default {
  mounted() {
    document.title = "Trip Genius";
    if (window.matchMedia('(max-width: 992px)').matches) {
      this.screenBig = false;
    } else {
      this.screenBig = true;
    }
    window.addEventListener('resize', function () {
      if (window.matchMedia('(max-width: 992px)').matches) {
        this.screenBig = false;
      } else {
        this.screenBig = true;
      }
    }.bind(this));
  },
  computed: {
    notification() {
      if (this.$store.state.notification != '') {
        return this.$store.state.notification;
      } else {
        return false
      }

    }
  },
  components: { PopupGlobal },
  data(){
    return {
      screenBig: true,
      showSearch: false,
      showSidenav: false,
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_global.scss";
@import 'bootstrap/dist/css/bootstrap.css';
</style>

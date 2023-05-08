<template>
  <div :class="{ 'stop-moving': ($store.state.selectedPopup != null) }">
    <nav class="navbar navbar-expand-lg black-background navbar-dark px-2"
      style="position: fixed; width: 100%; z-index: 10; height: 64px;">
      <div class="container-fluid p-0" style="position: relative; display: flex; flex-wrap: nowrap;">
        <button v-if="showSearch" class="btn nav-bar-button" @click="showSearch = false">
          <i class="bi bi-x"></i>
        </button>
        <div class="nav-bar-left" style="width: 300px; display: flex; align-items: center;" v-if="!showSearch">
          <button class="btn nav-bar-button" v-if="!screenBig && !showSearch" @click="showSidenav = true" style="margin-right: 10px;">
            <i class="bi bi-list"></i>
          </button>
          <router-link to='/'><img src="@/assets/logo.svg" style="height: 35px; margin-right: 10px;"/></router-link>
          <router-link to='/' v-if="screenBig" style="font-size: 26px; text-decoration: none; font-weight: 700; color: white;">XMR-BET</router-link>
          
          <button class="btn nav-bar-button" v-if="!screenBig && !showSearch" @click="showSearch = true">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <div class="nav-bar-middle container" style="display: flex; justify-content: center;">
          <div style="display: flex; justify-content: space-between;" :class="{ 'col-8': screenBig }">

            <div style="position: relative;" v-if="screenBig || showSearch">
              <i class="bi bi-search" style="position: absolute; left: 12px; top: 7px;"></i>
              <input type="text" class="form-control search-input" style="padding-left: 37px;"
                placeholder="Search XMR-Bet" />
            </div>

          </div>
        </div>
        <div style="position: absolute; right: 0;" v-if="!showSearch">
          <router-link :to="{ name: 'login' }">
            <button class="btn btn-primary me-2">
              Login
            </button>
          </router-link>
          <router-link :to="{ name: 'sign-up' }" v-if="screenBig">
            <button class="btn btn-light" type="button">
              Sign up
            </button>
          </router-link>
        </div>
      </div>
    </nav>

    <div style="min-height: 80vh; display: flex; padding: 0; align-items: stretch;">
      <nav class="sidenav" v-if="showSidenav || screenBig">
        <div class="sidenav-inner">
          <button v-if="showSidenav" class="btn nav-bar-button" @click="showSidenav = false" style="position: fixed; top: 10px; right: 10px; background: black; color: white;">
            <i class="bi bi-x"></i>
          </button>
          <ul>
            <li><router-link :to="{ name: 'home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'getting-started' }">Getting started</router-link></li>
            <li><router-link :to="{ name: 'about' }">About</router-link></li>
          </ul>
          <ul>
            <li v-for="category in categories">
              <a href="#">{{ category.name }}</a>
              <ul>
                <li v-for="subcategory in category.subcategories">
                  <a href="#">{{ subcategory }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
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
    document.title = "XMR-BET";
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
  data() {
    return {
      screenBig: false,
      showSearch: false,
      showSidenav: false,
      categories:
        [
          { name: 'Sports', subcategories: ['Soccer', 'Tennis'] },
          { name: 'eSports', subcategories: ['League of Legends', 'Chess'] },
          { name: 'Politics', subcategories: ['USA', 'Australia', 'UK', 'Global'] },
        ],
      events:
        [
          {
            // Time left is a date object which returns the time when the event expires
            name: 'World Chess Championship', timeLeft: new Date('2011-04-11T10:20:30Z'), description: 'The World Chess Championship 2023 is a chess match between Ian Nepomniachtchi and Ding Liren to determine the new World Chess Champion. ',
            outcomes: [
              { name: 'Ian Nepomniachtchi wins', volume: 453, payout: 1.73 },
              { name: 'Ding Liren wins', volume: 320, payout: 2.1 },
              { name: 'Draw', volume: 120, payout: 3.2 }
            ]
          },
          {
            // Time left is a date object which returns the time when the event expires
            name: 'World Chess Championship', timeLeft: new Date('2011-04-11T10:20:30Z'), description: 'The World Chess Championship 2023 is a chess match between Ian Nepomniachtchi and Ding Liren to determine the new World Chess Champion. ',
            outcomes: [
              { name: 'Ian Nepomniachtchi wins', volume: 453, payout: 1.73 },
              { name: 'Ding Liren wins', volume: 320, payout: 2.1 },
              { name: 'Draw', volume: 120, payout: 3.2 }
            ]
          },
          {
            // Time left is a date object which returns the time when the event expires
            name: 'World Chess Championship', timeLeft: new Date('2011-04-11T10:20:30Z'), description: 'The World Chess Championship 2023 is a chess match between Ian Nepomniachtchi and Ding Liren to determine the new World Chess Champion. ',
            outcomes: [
              { name: 'Ian Nepomniachtchi wins', volume: 453, payout: 1.73 },
              { name: 'Ding Liren wins', volume: 320, payout: 2.1 },
              { name: 'Draw', volume: 120, payout: 3.2 }
            ]
          }
        ]
    }
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
}
</script>

<style lang="scss">
@import "@/assets/scss/_global.scss";
</style>

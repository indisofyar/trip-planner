<template>
  <div :class="{ 'stop-moving': ($store.state.selectedPopup != null) }">
    <nav class="navbar navbar-expand-lg black-background navbar-dark px-2"
      style="position: fixed; width: 100%; z-index: 10; height: 64px;">
      <div class="container-fluid p-1">
        <a class="navbar-brand" href="#">XMR-BET</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div style="position: relative;">
            <i class="bi bi-search" style="position: absolute; left: 10px; top: 7px;"></i>
            <input type="text" class="form-control" style="padding-left: 37px;" />
          </div>
        </div>
        <div>
          <button class="btn btn-primary me-2">
            Login
          </button>
          <button class="btn btn-light" type="button">
            Signup
          </button>
        </div>
      </div>
    </nav>

    <div style="min-height: 80vh; display: flex; padding: 0; align-items: stretch;">
      <nav class="sidenav white-background ">
        <ul>
          <li>Get started</li>
          <li>About</li>
          <li v-for="category in categories">
            {{ category.name }}
            <ul>
              <li v-for="subcategory in category.subcategories">{{ subcategory }}
              </li>
            </ul>

          </li>
        </ul>
      </nav>
      <div class="container" style="padding-top: 64px;">
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
  },
  data() {
    return {
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
$orange: #E9622C;
$yellow: #F4F1BB;
$teal: #9BC1BC;
$black: #262730;
$white: #ebebeb;

* {
  color: $black;
}

.sidenav {

  width: 300px;
  padding-top: 64px;
  z-index: 9;
  min-height: 100vh;

  ul {

    list-style-type: none;
    padding: 15px;
  }
}

.stop-moving {
  overflow: hidden;
  height: 100vh;
}

.heading_small {
  font-size: 22px;
}

.error {
  color: rgb(145, 33, 33);
}

.site-footer {
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}

.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5
}

.site-footer hr.small {
  margin: 20px 0
}

.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px
}

.site-footer a {
  color: #737373;
}

.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}

.footer-links {
  padding-left: 0;
  list-style: none
}

.footer-links li {
  display: block
}

.footer-links a {
  color: #737373
}

.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}

.footer-links.inline li {
  display: inline-block
}

.site-footer .social-icons {
  text-align: right
}

.site-footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d
}

.copyright-text {
  margin: 0
}

@media (max-width:991px) {
  .site-footer [class^=col-] {
    margin-bottom: 30px
  }
}

@media (max-width:767px) {
  .site-footer {
    padding-bottom: 0
  }

  .site-footer .copyright-text,
  .site-footer .social-icons {
    text-align: center
  }
}

.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none
}

.social-icons li {
  display: inline-block;
  margin-bottom: 4px
}

.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px
}

.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all .2s linear;
  -o-transition: all .2s linear;
  transition: all .2s linear
}

.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: #fff;
  background-color: #29aafe
}

.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px
}

.social-icons a.facebook:hover {
  background-color: #3b5998
}

.social-icons a.twitter:hover {
  background-color: #00aced
}

.social-icons a.linkedin:hover {
  background-color: #007bb6
}

.social-icons a.dribbble:hover {
  background-color: #ea4c89
}

@media (max-width:767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600
  }
}


.teal-background {
  background-color: $teal;
}

.black-background {
  background-color: $black;
}

.yellow-background {
  background-color: $yellow;
}

.white-background {
  background-color: $white;
}

.teal-text {
  color: $teal;
}

.black-text {
  color: $black;
}

.yellow-text {
  color: $yellow;
}

.white-text {
  color: $white;
}

.teal-text {
  color: $teal;
}
</style>

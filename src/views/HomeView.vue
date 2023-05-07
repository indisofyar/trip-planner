<template>
  <section>
    <div class="row gy-2 pt-3" style="display: flex; justify-content: center;">
      <div class="col-8">
        {{ category }} > {{ subcategory }}
      </div>
      <div id="demo">

      </div>
      <div class="col-8 event-card" v-for="event in events">
        <h2>{{ event.name }}</h2>
        <p>{{ event.description }}</p>

        <div class="time-left" :id="String('timeLeft' + event.id)" :ref="timeLeft + event.id"></div>
        <table class="table">
          <thead>
            <tr>
              <th>Outcome</th>
              <th>Volume</th>
              <th>Payout</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="outcome in event.outcomes">
              <td>{{ outcome.name }}</td>
              <td>${{ outcome.volume }}</td>
              <td>{{ outcome.payout }}</td>
              <td>
                <button class="btn btn-primary" @click="$store.commit('selectPopup', 'MakeBet');">Bet</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import PopupGlobal from '@/components/PopupGlobal.vue';
import { nextTick } from 'vue';

export default {
  name: "HomeView",
  methods: {
    timeLeft(expiryDate, eventId) {
      var countDownDate = expiryDate.getTime();
      let timeLeftElement = document.getElementById('timeLeft' + eventId);

      // Update the count down every 1 second
      var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        timeLeftElement.innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          timeLeftElement.innerHTML = "EXPIRED";
        }
      }, 1000);
    }
  },
  data() {
    return {
      category: 'eSports',
      subcategory: 'Chess',
      events:
        [
          {
            // Time left is a date object which returns the time when the event expires
            name: 'World Chess Championship', expiryDate: new Date('2023-05-11T10:20:30Z'), id: 1, description: 'The World Chess Championship 2023 is a chess match between Ian Nepomniachtchi and Ding Liren to determine the new World Chess Champion. ',
            outcomes: [
              { name: 'Ian Nepomniachtchi wins', volume: 453, payout: 1.73 },
              { name: 'Ding Liren wins', volume: 320, payout: 2.1 },
              { name: 'Draw', volume: 120, payout: 3.2 }
            ]
          },
          {
            // Time left is a date object which returns the time when the event expires
            name: 'World Chess Championship', expiryDate: new Date('2023-05-11T10:20:30Z'), id: 2, description: 'The World Chess Championship 2023 is a chess match between Ian Nepomniachtchi and Ding Liren to determine the new World Chess Champion. ',
            outcomes: [
              { name: 'Ian Nepomniachtchi wins', volume: 453, payout: 1.73 },
              { name: 'Ding Liren wins', volume: 320, payout: 2.1 },
              { name: 'Draw', volume: 120, payout: 3.2 }
            ]
          },
          {
            // Time left is a date object which returns the time when the event expires
            name: 'World Chess Championship', expiryDate: new Date('2023-05-11T10:20:30Z'), id: 3, description: 'The World Chess Championship 2023 is a chess match between Ian Nepomniachtchi and Ding Liren to determine the new World Chess Champion. ',
            outcomes: [
              { name: 'Ian Nepomniachtchi wins', volume: 453, payout: 1.73 },
              { name: 'Ding Liren wins', volume: 320, payout: 2.1 },
              { name: 'Draw', volume: 120, payout: 3.2 }
            ]
          }
        ]
    }
  },
  mounted() {
    this.events.forEach(event => {
      this.timeLeft(event.expiryDate, event.id)
    });
  }
}
</script>

<style scoped lang="scss">
.event-card {
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  padding: 18px 36px;
  position: relative;
  transition: 0.5s ease;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
  }

  .time-left {
    position: absolute;
    top: 18px;
    right: 36px;
  }
}
</style>

<template>
  <section>
   
    <div class="row gy-2 pt-3" style="display: flex; justify-content: center;">
      <div class="col-8">
        {{ category }} > {{ subcategory }}
      </div>
      <div class="col-8 event-card" v-for="event in events">
        <h2>{{ event.name }}</h2>
        <p>{{ event.description }}</p>
        <span class="time-left">{{ event.timeLeft }}</span>
        <table>
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
                <button class="btn btn-primary">Bet</button>
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
import MultiRangeSlider from '@/components/MultiRangeSlider.vue'
import PopupGlobal from '@/components/PopupGlobal.vue';

export default {
  name: "HomeView",
  data() {
    return {
      category: 'eSports',
      subcategory: 'Chess',
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
  }
}
</script>

<style scoped lang="scss">
.event-card{
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  padding: 18px 36px;
  position: relative;
  transition: 0.5s ease;
  &:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
  h2{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  .time-left{
    position: absolute;
    top: 18px;
    right: 36px;
  }
}
</style>

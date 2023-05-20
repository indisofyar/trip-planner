<template>
  <section class="container" style="min-height: 60vh;">
    <div class="row" style="min-height: 5vh;">
    </div>
    <div class="row">
      <div class="col-12">
        <h2 class="text-center mb-3">What area of London do you want to stay?</h2>
      </div>
      <Card>
        <h4>Popular locations</h4>
        <div class="d-flex">
            
        </div>
      </Card>
    </div>

  </section>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import PopupGlobal from '@/components/PopupGlobal.vue';
import { nextTick } from 'vue';
import Card from '@/components/card/Card.vue';

export default {
  name: "HomeView",
  components: { Card }
}
</script>

<style lang="scss">
.card {
  padding: 25px 25px 40px 25px;
}

.input-tall {
  height: 50px;
}
</style>

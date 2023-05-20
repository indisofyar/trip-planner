<template>
  <section class="container" style="min-height: 60vh;">
    <div class="row" style="min-height: 5vh;">

    </div>
    <div class="row">
      <div class="col-12">
        <h1 class="text-center mb-3">Plan your first trip</h1>
      </div>
      <Card>
        <div class="d-flex align-items-center gap-3 flex-wrap flex-md-nowrap">
          <div class="d-flex align-items-center flex-nowrap gap-3" style=" min-width: 200px;">
            <i class="bi bi-arrow-left-right"></i>
            <select class="form-select">
              <option>Round trip</option>
              <option>One way</option>
            </select>
          </div>
          <i class="bi bi-person"></i>
          <select class="form-select">
            <option>1</option>
          </select>
          <select class="form-select">
            <option>Economy</option>
            <option>Premium economy</option>
            <option>Business</option>
            <option>First</option>
          </select>
        </div>
        <div class="d-flex gap-3 mt-3 flex-wrap flex-md-nowrap" style="width:100%">
          <div class="position-relative w-100-sm">
            <i class="bi bi-geo position-absolute" style="top:12px; left: 6px;"></i>
            <input type="text" class="form-control input-tall" style="padding-left: 27px;"
              placeholder="Your location..." />
          </div>
          <div class="position-relative w-100-sm">
            <i class="bi bi-geo-alt position-absolute" style="top:12px; left: 6px;"></i>
            <input type="text" class="form-control input-tall" style="padding-left: 27px;" value="London" disabled />
            <label class="position-absolute" style="bottom:-20px; font-size: 12px; left: 10px;">More locations coming
              soon</label>
            </div>
          <div class="w-100 d-md-none mt-2">

          </div>
          <div class="position-relative w-100-sm">
            <label class="position-absolute"
              style="background-color: white; top: -8px; left: 5px; padding: 0 8px; font-size: 12px; color: gray;">From</label>
            <input type="date" class="form-control input-tall" />

          </div>
          <div class="position-relative w-100-sm">
            <label class="position-absolute"
              style="background-color: white; top: -8px; left: 5px; padding: 0 8px; font-size: 12px; color: gray;">To</label>

            <input type="date" class="form-control input-tall" />
          </div>
        </div>
        <RouterLink to="/plan-trip/1">
        <button class="btn btn-primary position-absolute pill" style="right: 18px; bottom: -22px; width: 110px;">
          Next
        </button>
      </RouterLink>
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
}</style>

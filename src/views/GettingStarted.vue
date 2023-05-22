<template>
  <div class=" w-full">
    <section class="container mx-auto max-w-screen-xl">
      <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold sm:text-4xl">Product still in development 🛠</h2>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 ">
          <div class="flex items-start gap-4 bg-white">
            <div
              class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 lg:min-h-[300px]">
              <div class="pt-4 text-gray-500">
                <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  Join our mailing list to be notified when we launch
                </h3>

                <!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->
                <form  v-if="!submitted" @submit.prevent
                  action="https://hooks.airtable.com/workflows/v1/genericWebhook/appRtc6XjilxYXv7w/wfl13chRTV4ViSdQ3/wtroMbUGo9GvmK8cJ"
                  method="POST">
                  <br>
                  <label for="fname">Name</label><br>
                  <input type="text" id="fname" name="fname" ><br>
                  <label for="email">Email</label><br>
                  <input type="email" id="email" name="email" ><br><br>
                  <input type="date" id="date" name="date"  class="hidden" v-model="todaysDate">
                  <input type="submit" value="Join our mailing list" @click="submitted = true"
                  class="block w-full mt-4 rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                </form>

                <p v-else><br><br>
                  Thanks for joining the mailing list, you're a superstar ⭐️
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "AboutView",
  data() {
    return {
      name: '',
      email: '',
      submitted : false,
    }
  },
  computed: {
    todaysDate() {
      return new Date().toISOString().slice(0, 10)
    }
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped lang="scss"></style>

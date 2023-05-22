<template>
  <section class="container" style="min-height: 60vh;">
    <div class="flex flex-col h-screen bg-white">
      <img
        src="https://images.unsplash.com/photo-1498511133332-ad66b117f533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9saWRheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
        alt="" class="object-cover w-full h-64" />

      <div class="flex items-center justify-center flex-1">
        <div class="max-w-xl px-4 py-8 mx-auto text-center">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We can't find that page.
          </h1>

          <p class="mt-4 text-gray-500">
            Try searching again, or return home to start from the beginning.
          </p>

          <a href="/"
            class="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring">
            Go Back Home
          </a>
        </div>
      </div>
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

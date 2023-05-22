<template>
  <section class="relative  bg-cover bg-center bg-no-repeat">

    <img src="../assets/photo-1558102822-da570eb113ed_n8tlul_c_scale,w_1400.avif" v-if="isMobile == false" alt=""
      class="absolute w-full h-full object-cover">
    <img src="../assets/photo-1558102822-da570eb113ed_n8tlul_c_scale,w_200.avif" v-else alt="" 
      class="absolute w-full h-full object-cover">


    <div
      class="absolute inset-0 bg-white/25 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
    </div>
    <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-5/6 lg:items-center lg:px-8">
      <div
        class="max-w-xl ltr:sm:text-left rtl:sm:text-right bg-white border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 rounded-lg">
        <h1 class="text-3xl font-semibold sm:text-5xl">
          Take the hassle out of<strong class="block font-bold text-blue-600"> your next holiday
          </strong>
        </h1>
        <p class="mt-4 max-w-lg sm:text-lg/relaxed">
          Generate an itinerary and book an entire holiday in 3 simple steps. From flights, to acommodation, activities
          and more!
        </p>
        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <router-link to='/get-started'
            class="block w-full rounded-full bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
            Get Started <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <div class=" bg-slate-50 w-full">
    <section class="container mx-auto max-w-screen-xl">
      <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold sm:text-4xl">How it works</h2>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div class="flex items-start gap-4 bg-white">
            <div
              class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 lg:min-h-[300px]">
              <div class="pt-4 text-gray-500">
                <span class="text-3xl">📝</span>

                <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  Fill out our quiz
                </h3>

                <p class="mt-2  text-sm sm:block">
                  Input information like hotel preferences, budget, preferred activites and more. We'll use this to get a
                  better idea of what you're looking for.
                </p>
              </div>

              <span class="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-600">
                1
              </span>
            </div>
          </div>
          <div class="flex items-start gap-4 bg-white">
            <div
              class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 lg:min-h-[300px]">
              <div class="pt-4 text-gray-500">
                <span class="text-3xl">✍️</span>

                <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  Receive itinerary and customise
                </h3>

                <p class="mt-2  text-sm sm:block">
                  Get a smart itinerary and customise it to your liking. Add or remove activities, change accomodation and
                  edit details until you're happy with it.
                </p>
              </div>

              <span class="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-600">
                2
              </span>
            </div>
          </div>
          <div class="flex items-start gap-4 bg-white">
            <div
              class="relative flex items-start justify-between rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8 lg:min-h-[300px]">
              <div class="pt-4 text-gray-500">
                <span class="text-3xl">🏝</span>

                <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                  Book your holiday
                </h3>

                <p class="mt-2  text-sm sm:block">
                  Through our platform, you'll be able to partially or fully book your holiday. Your preferred flights,
                  accomodations or activities can be collectively booked in one simple transaction.
                </p>
              </div>

              <span class="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-600">
                3
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
  <div class="  w-full">
    <section class="container mx-auto max-w-screen-xl">
      <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold sm:text-4xl">Why tripgenius?</h2>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div class="flex items-start gap-4">
            <div class="shrink-0 rounded-lg bg-blue-100 p-4 text-blue-500 h-[50px] w-[50px] ">
              <i class="bi bi-stopwatch relative bottom-1"></i>
            </div>

            <div>
              <h2 class="text-lg font-bold">Instant itinerary generation</h2>

              <p class="mt-1 text-sm ">
                Generate a comprehensive plan at within seconds, including flights, accommodations, activities, and dining
                options.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="shrink-0 rounded-lg bg-blue-100 p-4 text-blue-500 h-[50px] w-[50px] ">
              <i class="bi bi-pencil relative bottom-1"></i>
            </div>

            <div>
              <h2 class="text-lg font-bold">Customisable</h2>

              <p class="mt-1 text-sm ">
                Customise, easily. Swap out itinerary items for others so that you can craft your dream holiday at a
                faster rate.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="shrink-0 rounded-lg bg-blue-100 p-4 text-blue-500 h-[50px] w-[50px] ">
              <i class="bi bi-lock relative bottom-1"></i>
            </div>

            <div>
              <h2 class="text-lg font-bold">Secure</h2>

              <p class="mt-1 text-sm ">
                We partner with Stripe, Booking.com and other partners to ensure that any transactions made through the
                site are secure.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="shrink-0 rounded-lg bg-blue-100 p-4 text-blue-500 h-[50px] w-[50px] ">
              <i class="bi bi-clock relative bottom-1"></i>
            </div>

            <div>
              <h2 class="text-lg font-bold">Real-time availability</h2>

              <p class="mt-1 text-sm ">
                Access up-to-date information on flight schedules, hotel vacancies, and activity availability.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="shrink-0 rounded-lg bg-blue-100 p-4 text-blue-500 h-[50px] w-[50px] ">
              <i class="bi bi-map relative bottom-1"></i>
            </div>

            <div>
              <h2 class="text-lg font-bold">Interactive map integration</h2>

              <p class="mt-1 text-sm ">
                Visualize your holiday destinations with our interactive map feature. Plan your journey with precision and
                discover hidden gems along the way.
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <div class="shrink-0 rounded-lg bg-blue-100 p-4 text-blue-500 h-[50px] w-[50px] ">
              <i class="bi bi-headset relative bottom-1"></i>
            </div>

            <div>
              <h2 class="text-lg font-bold">24/7 customer support</h2>

              <p class="mt-1 text-sm ">

                Our friendly
                and knowledgeable team is ready to provide prompt support and ensure your holiday planning process is
                smooth and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <section style="height:80vh" class="mb-5">
    <div class="col-12 mb-5">
      <h2 style="text-align: center;">Why trip genius?</h2>
    </div>
    <div class="col-12 d-flex justify-content-center">

      <div class="col-8">


        <h3>Discover the Magic of Instant Itineraries:</h3>

        <p>No more browsing through endless websites, guidebooks, or travel forums. TripGenius harnesses the power of
          advanced algorithms and real-time data to instantly create a complete and customized holiday itinerary, tailored
          precisely to your preferences and interests. Within seconds, you'll have a comprehensive plan at your
          fingertips, including flights, accommodations, activities, and dining options, so you can make the most of every
          moment.</p>

        <h3>Tailored to Your Every Whim:</h3>

        <p>TripGenius knows that every traveler is unique, and we celebrate that diversity by crafting itineraries that
          reflect your personal style and passions. Whether you're a culture connoisseur, an outdoor enthusiast, a foodie,
          or an adrenaline junkie, our intelligent app analyzes your preferences and suggests the most captivating
          destinations, activities, and experiences that align with your interests. Get ready to immerse yourself in the
          joy of travel, curated just for you.</p>

        <h3>Efficiency Meets Exploration:</h3>

        <p>Gone are the days of spending hours coordinating flights, booking accommodations, and researching attractions.
          With TripGenius, your itinerary is optimized for maximum efficiency, ensuring you have ample time to explore
          each destination without feeling rushed. Our smart algorithms consider travel distances, opening hours, and even
          local events, guaranteeing you a seamless experience from start to finish. It's time to focus on the adventure,
          not the logistics.</p>

        <h3>Seamless Integration, Anywhere, Anytime:</h3>

        <p>TripGenius seamlessly integrates with your favorite devices and platforms, making it easy to access your
          itinerary whenever and wherever you need it. Whether you're using your smartphone, tablet, or computer, your
          trip details are always just a tap or click away. With real-time updates, intuitive navigation, and offline
          capabilities, you can enjoy peace of mind knowing that TripGenius has your back, no matter where your wanderlust
          takes you.</p>

        <h3>Your Journey, Our Priority:</h3>

        <p>At TripGenius, your satisfaction and happiness are our top priorities. We've designed the app with
          user-friendly features and an intuitive interface to ensure a seamless and enjoyable experience. And if you ever
          need assistance, our dedicated support team is here to help, ready to answer your questions and provide guidance
          every step of the way. Your journey matters to us, and we're committed to making it extraordinary.</p>

        <h3>Ready to Unleash Your Adventurous Spirit?</h3>

        <p>Unlock the door to effortless travel planning and embark on extraordinary journeys with TripGenius. Say goodbye
          to stress, indecision, and wasted time, and say hello to instant, personalized itineraries that elevate your
          holiday experience. Start your adventure today and let TripGenius be your guide to a world of unforgettable
          memories. Download the app now and make every trip extraordinary!</p>
      </div>
    </div>
  </section> -->
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center gap-4 rounded-lg bg-blue-600 p-6 shadow-lg sm:flex-row sm:justify-between">
      <strong class="text-xl text-white sm:text-xl">
        Plan your next trip with us.
      </strong>

      <a class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-blue-600 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
        href="/get-started">
        <span class="text-sm font-medium"> Get Started </span>

        <svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import PopupGlobal from '@/components/PopupGlobal.vue';
import { nextTick } from 'vue';

export default {
  name: "HomeView",
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
    
      if (window.innerWidth < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>

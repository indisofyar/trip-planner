<template>
  <section class="container flex-wrap" style="height: 80vh; display: flex; justify-content: center; align-items: center;">
    <div class="col-12 col-md-6">
      <h1>Take the hassle out of holiday</h1>
      <p>Generate an itinerary and book an entire holiday in 3 simple steps. From flights, to acommodation, activities
        and more! </p>
      <button class="btn btn-primary" @click="$router.push('/signup')">Get started</button>
    </div>
    <div class="col-md-6" style="display: flex; justify-content: center;">
      <img src="@/assets/phone-mockup.png" style="width: 300px; max-height: 100%; height: auto; object-fit: contain; margin-top: 32px;"/>
    </div>
  </section>
  <section style="height:80vh" class="mb-5">
    <div class="col-12 mb-5">
      <h2 style="text-align: center;">Why trip genius?</h2>
    </div>
    <div class="col-12 d-flex justify-content-center">
      
      <div class="col-8">

  
      <h3>Discover the Magic of Instant Itineraries:</h3>

<p>No more browsing through endless websites, guidebooks, or travel forums. TripGenius harnesses the power of advanced algorithms and real-time data to instantly create a complete and customized holiday itinerary, tailored precisely to your preferences and interests. Within seconds, you'll have a comprehensive plan at your fingertips, including flights, accommodations, activities, and dining options, so you can make the most of every moment.</p>

<h3>Tailored to Your Every Whim:</h3>

<p>TripGenius knows that every traveler is unique, and we celebrate that diversity by crafting itineraries that reflect your personal style and passions. Whether you're a culture connoisseur, an outdoor enthusiast, a foodie, or an adrenaline junkie, our intelligent app analyzes your preferences and suggests the most captivating destinations, activities, and experiences that align with your interests. Get ready to immerse yourself in the joy of travel, curated just for you.</p>

<h3>Efficiency Meets Exploration:</h3>

<p>Gone are the days of spending hours coordinating flights, booking accommodations, and researching attractions. With TripGenius, your itinerary is optimized for maximum efficiency, ensuring you have ample time to explore each destination without feeling rushed. Our smart algorithms consider travel distances, opening hours, and even local events, guaranteeing you a seamless experience from start to finish. It's time to focus on the adventure, not the logistics.</p>

<h3>Seamless Integration, Anywhere, Anytime:</h3>

<p>TripGenius seamlessly integrates with your favorite devices and platforms, making it easy to access your itinerary whenever and wherever you need it. Whether you're using your smartphone, tablet, or computer, your trip details are always just a tap or click away. With real-time updates, intuitive navigation, and offline capabilities, you can enjoy peace of mind knowing that TripGenius has your back, no matter where your wanderlust takes you.</p>

<h3>Your Journey, Our Priority:</h3>

<p>At TripGenius, your satisfaction and happiness are our top priorities. We've designed the app with user-friendly features and an intuitive interface to ensure a seamless and enjoyable experience. And if you ever need assistance, our dedicated support team is here to help, ready to answer your questions and provide guidance every step of the way. Your journey matters to us, and we're committed to making it extraordinary.</p>

<h3>Ready to Unleash Your Adventurous Spirit?</h3>

<p>Unlock the door to effortless travel planning and embark on extraordinary journeys with TripGenius. Say goodbye to stress, indecision, and wasted time, and say hello to instant, personalized itineraries that elevate your holiday experience. Start your adventure today and let TripGenius be your guide to a world of unforgettable memories. Download the app now and make every trip extraordinary!</p>
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
}
</script>

<style scoped lang="scss"></style>

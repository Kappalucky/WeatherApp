<template>
  <div id="City">
      <!-- Graphs about city with all details in carousel or Graphs below -->
      <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'City',
  computed: mapState([
    'user',
  ]),
};
</script>

<style scoped>

</style>

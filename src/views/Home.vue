<template>
  <main
    id="home"
    :style="{ backgroundImage: `url('${backgroundLink}')` }">
    <div
      id="intro"
      class="view">
      <div class="mask rgba-black-strong">
        <div class="container-fluid d-flex align-items-center justify-content-center h-100">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-md-12">
              <!-- Title -->
              <h2
                id="main_title"
                class="display-4 font-weight-bold white-text pt-5 mb-2">KWeather</h2>
              <!-- Help text -->
              <small class="white-text">PS: U.S. Users can use zipcodes
                <img
                  id="cool-shades"
                  src="https://emojipedia-us.s3.amazonaws.com/thumbs/160/whatsapp/116/smiling-face-with-sunglasses_1f60e.png">
              </small>
              <!-- Search -->
              <section class="mt-2">
                <search/>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import ImageService from '@/services/ImageService';
import Search from '@/components/Search.vue';
import { mapMutations } from 'vuex';

export default {
  name: 'Home',
  components: {
    Search,
  },
  data() {
    return {
      unitStatus: 'F',
      backgroundLink: '',
    };
  },
  beforeMount() {
    this.getRandom();
  },
  methods: {
    ...mapMutations(['changeUnitStatus']),
    async getRandom() {
      const response = await ImageService.getRandom();
      this.backgroundLink = response.data.urls.full;
    },
    changeStatus() {
      this.$store.commit('changeUnitStatus', {
        status: this.unitStatus,
      });
    },
    // Uses temp attribute from weather data
  },
};
</script>
<style>
@import 'https://fonts.googleapis.com/css?family=Permanent+Marker';

#home {
  height: 100vh;
}
#main_title {
  font-family: 'Permanent Marker', cursive;
}
.view {
  height: 100%;
}
#home {
  background-image: url('https://images.unsplash.com/photo-1506444187582-b55b5c08d677?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMwNDQwfQ&s=d38ed9af72cd9d09972eed80efbf7a19')
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#cool-shades {
  display: inline;
  width: 20px;
  height: 20px;
}
</style>

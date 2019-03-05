<template>
  <main id="home" :style="{ backgroundImage: `url('${backgroundLink}')` }">
    <div id="intro" class="view">
      <div class="mask rgba-black-strong">
        <div class="container-fluid d-flex align-items-center justify-content-center h-100">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-md-12">
              <!-- Title -->
              <h2 id="main_title" class="display-4 font-weight-bold white-text pt-5 mb-2">KWeather</h2>
              <!-- Help text -->
              <small class="white-text">
                PS: U.S. Users can use zipcodes
                <img
                  id="cool-shades"
                  src="https://emojipedia-us.s3.amazonaws.com/thumbs/160/whatsapp/116/smiling-face-with-sunglasses_1f60e.png"
                >
              </small>
              <!-- Search -->
              <section class="mt-2">
                <search ref="search"/>
              </section>
              <!-- Button Field -->
              <div id="buttons" class="mt-3">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="getGeolocation"
                >Current Location</button>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  @click="searchLocation"
                >Search Location</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import ImageService from "@/services/ImageService";
import Search from "@/components/Search.vue";

export default {
  name: "Home",
  components: {
    Search
  },
  data() {
    return {
      backgroundLink: ""
    };
  },
  beforeMount() {
    this.getRandom();
  },
  computed: {
    getWeather() {
      return this.$store.state.weatherCard;
    }
  },
  watch: {
    getWeather(newValue) {
      if (this.$store.state.weatherCard) {
        this.$router.push("/dashboard");
      }
    }
  },
  methods: {
    async getRandom() {
      const response = await ImageService.getRandom();
      this.backgroundLink = response.data.urls.full;
    },
    getGeolocation() {
      this.$store.dispatch("getWeatherByGeolocation");
    },
    searchLocation() {
      this.$refs.search.submit();
    }
  }
};
</script>
<style>
#home {
  height: 100vh;
}
#main_title {
  font-family: "Permanent Marker", cursive;
}
.view {
  height: 100%;
}
#home {
  background-image: url("https://images.unsplash.com/photo-1506444187582-b55b5c08d677?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMwNDQwfQ&s=d38ed9af72cd9d09972eed80efbf7a19")
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
.btn {
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  -webkit-border-radius: 10em;
  border-radius: 10em;
  padding: 0.84rem 2.14rem;
  font-size: 0.81rem;
}

.btn-outline-primary {
  color: white !important;
}
</style>

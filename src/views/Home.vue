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
				<div class="container-fluid d-flex justify-content-end fixed-bottom white-text">
					<div class="source">
						<p class>Location: {{location}}</p>
						<template v-if="user.link">
							<a :href="user.link">
								<p>By: {{user.name}}</p>
							</a>
						</template>
						<template v-else>
							<p>By: {{user.name}}</p>
						</template>

						<template v-if="description">
							<p>Description: {{description}}</p>
						</template>
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
			description: "",
			backgroundLink: "",
			location: "" || "Anonymous",
			user: {
				name: "" || "Anonymous",
				link: ""
			}
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
		getWeather() {
			if (this.$store.state.weatherCard) {
				this.$router.push("/dashboard");
			}
		}
	},
	methods: {
		async getRandom() {
			// Astronomical Season selection
			let date = new Date().getMonth();
			let day = new Date().getDate();
			let season = "";

			// December 21st - March 20th
			if ((date === 11 && day >= 21) || (date === 2 && day <= 20)) {
				season = "Winter";
			}
			// March 20th - June 20th
			if ((date === 2 && day >= 20) || (date === 5 && day <= 20)) {
				season = "Spring";
			}
			// June 21st - September 20th
			if ((date === 5 && day >= 21) || (date === 8 && day <= 20)) {
				season = "Summer";
			}
			// September 21st - December 20th
			if ((date === 8 && day >= 21) || (date === 11 && day <= 20)) {
				season = "Fall";
			}

			const response = await ImageService.getRandomByWeather(season);
			this.description = response.data.description;
			this.backgroundLink = response.data.urls.regular;
			this.location = response.data.location.title;
			this.user.name = response.data.user.name;
			this.user.link = response.data.user.links.html;
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
#buttons {
	margin-bottom: 1rem;
}
.btn-outline-primary {
	color: white !important;
}
.source p {
	margin-bottom: 0;
	padding-bottom: 3px;
	text-transform: capitalize;
}
.source a {
	color: white;
}
</style>

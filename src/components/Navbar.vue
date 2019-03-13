<template>
	<header id="app-header">
		<nav class="navbar navbar-expand-md navbar-dark bg-dark">
			<a class="navbar-brand" style="font-family: 'Permanent Marker'" href="/">{{ name }}</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
				@click="drawer = !drawer"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{ display: drawer }">
				<ul class="navbar-nav mr-auto">
					<!--<template v-if="currentRoute">
						<li class="nav-item">
							<a class="nav-link" href="#">
								Dashboard
								<span class="sr-only">(current)</span>
							</a>
						</li>
					</template>-->
					<!--<li class="nav-item dropdown" v-if="getForecast.length">
						<a
							class="nav-link dropdown-toggle"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							@click="dropdown = !dropdown"
						>Forecast</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown" :class="{ display: dropdown }">
							<template v-for="(forecast, index) in getForecast">
								<router-link
									class="dropdown-item"
									tag="a"
									:to="{ name: 'City', params: { id: forecast.city.id} }"
									:key="index"
								>{{forecast.city.name}}</router-link>
							</template>
						</div>
					</li>-->
				</ul>
				<div class="btn-group btn-group-toggle" data-toggle="buttons">
					<label id="navbutton" class="btn" @click="changeUnit('C')" :class="{active: optionC}">
						<input type="radio" name="options" id="option1" autocomplete="off" checked> C
					</label>
					<label id="navbutton" class="btn" @click="changeUnit('F')" :class="{active: optionF}">
						<input type="radio" name="options" id="option2" autocomplete="off"> F
					</label>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
import Search from "@/components/Search.vue";

export default {
	name: "Navbar",
	components: {
		Search
	},
	data() {
		return {
			name: "Kweather",
			optionC: false,
			optionF: true,
			dropdown: false,
			drawer: false,
			currentRoute: false
		};
	},
	computed: {
		getForecast() {
			return this.$store.state.weatherForecast;
		}
	},
	methods: {
		changeUnit(unit) {
			if (unit === "C") {
				this.optionC = true;
				this.optionF = false;
			} else {
				this.optionC = false;
				this.optionF = true;
			}
			this.$store.dispatch("temperatureChange", unit);
		}
	},
	created() {
		/*if (this.$route.path === "/dashboard") {
			this.currentRoute = true;
		}
		console.log(this.$route.path);*/
	}
};
</script>

<style scoped>
#navbutton {
	background-color: burlywood;
}
.display {
	display: block;
}

nav {
	background-color: #8a9eb2;
	position: fixed;
	right: 0;
	top: 0;
	left: 0;
	z-index: 1030;
}

nav a {
	color: white;
	text-decoration-style: none;
}

nav img {
	height: 35px;
	width: 35px;
}

nav a:hover {
	color: black;
}

.drop-down-text {
	color: black;
	text-align: center;
	font-family: "Courier New", Courier, monospace;
}
</style>

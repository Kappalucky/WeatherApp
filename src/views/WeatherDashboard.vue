<template>
	<div class="container my-5">
		<Navbar/>
		<main>
			<section class="container-fluid search">
				<div class="row">
					<div class="col searchContainer">
						<Search ref="search" class="searchBar"/>
						<button type="button" class="btn btn-outline-black" @click="getGeolocation">
							<i class="fas fa-location-arrow"></i>
						</button>
						<button type="button" class="btn btn-outline-black" @click="searchLocation">
							<i class="fas fa-search"></i>
						</button>
					</div>
				</div>
			</section>
			<br>
			<section v-if="getErrors" class="errors">
				<p v-for="(error, key) in getErrors" :key="key">
					<span>{{ error }}</span>
				</p>
			</section>
			<section class="container-fluid">
				<div class="row">
					<section
						class="col-xs weatherCard"
						v-for="(weatherCard, index) in getWeatherCards"
						:key="index"
					>
						<div class="row">
							<aside class="col-md weatherCard-tempDetails">
								<div class="close" @click="removeCard(index)">X</div>
								<div class="tempDetails-location">{{weatherCard.name}}</div>
								<div class="tempDetails-currentTemp">
									<div class="currentTemp-image">
										<img :src="'http://openweathermap.org/img/w/' + weatherCard.weather[0].icon + '.png'">
									</div>
									<div class="currentTemp-temp">
										{{Math.round(convertTemp(weatherCard.main.temp))}}
										<span>°{{getUnit.temp}}</span>
									</div>
								</div>
								<div class="tempDetails-weather">{{weatherCard.weather[0].description}}</div>
								<div class="tempDetails-date">{{moment.unix(weatherCard.dt).utc().format("dddd, MMMM Do")}}</div>
								<br>
								<div class="tempDetails-stats">
									<div class="stats">
										<div class="stats-wind">
											<div class="wind-image">
												<i class="fas fa-wind"></i>
											</div>
											<div class="wind-stat">
												{{Math.round(convertSpeed(weatherCard.wind.speed))}}
												<span>{{getUnit.speed}}</span>
											</div>
										</div>
										<div class="stats-humidity">
											<div class="humidity-image">
												<img src="@/assets/img/humidity_icon.png">
											</div>
											<div class="humidity-stat">
												{{Math.round(weatherCard.main.humidity)}}
												<span>%</span>
											</div>
										</div>
									</div>
									<div class="stats-space"></div>
									<div class="stats-tempRange">
										<div class="tempRange-high">
											<div class="high-image">
												<i class="fas fa-arrow-up"></i>
											</div>
											<div class="high-stat">
												{{Math.round(convertTemp(weatherCard.main.temp_max))}}
												<span>°{{getUnit.temp}}</span>
											</div>
										</div>
										<div class="tempRange-low">
											<div class="low-image">
												<i class="fas fa-arrow-down"></i>
											</div>
											<div class="low-stat">
												{{Math.round(convertTemp(weatherCard.main.temp_min))}}
												<span>°{{getUnit.temp}}</span>
											</div>
										</div>
									</div>
								</div>
							</aside>
							<aside class="col-md weatherCard-forecast list-group" v-if="getWeatherForecast.length">
								<template v-for="forecast in getForecast(index).list">
									<template v-if="forecast.dt_txt.includes('00:00:00')">
										<a href="#" class="list-group-item list-group-item-action" :key="forecast.id">
											<div class="item-image">
												<img :src="'http://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png'">
											</div>
											<div class="item-date">{{moment.unix(forecast.dt).utc().format("dddd")}}</div>
											<div class="item-temperatures">
												<div class="temperatures-high">
													<span class="high-image">
														<i class="fas fa-arrow-up"></i>
													</span>
													<span class="high-temp">
														{{Math.round(convertTemp(forecast.main.temp_max))}}
														<span>°{{getUnit.temp}}</span>
													</span>
												</div>
												<div class="temperatures-low">
													<span class="low-image">
														<i class="fas fa-arrow-down"></i>
													</span>
													<span class="low-temp">
														{{Math.round(convertTemp(forecast.main.temp_min))}}
														<span>°{{getUnit.temp}}</span>
													</span>
												</div>
											</div>
										</a>
									</template>
								</template>
							</aside>
						</div>
					</section>
				</div>
			</section>
		</main>
		<br>
		<app-footer/>
	</div>
</template>

<style>
.close {
	float: right;
	margin: 5px;
}
.navHold {
	background-color: grey;
}
.errors {
	text-align: center;
	color: red;
	font-style: italic;
	font-weight: 900;
}
.search {
	margin-top: 5rem;
}
.searchContainer {
	display: flex;
	justify-content: center;
	align-items: center;
}
.searchContainer form {
	flex: 1;
}
.searchContainer button {
	border-color: grey !important;
	padding: 0rem 1rem !important;
}
.searchBar {
	display: flex;
	flex: 1;
}
.row {
	margin-left: 0;
	margin-right: 0;
}
.weatherCard {
	border: 1px solid rgba(197, 196, 196, 0.88);
	border-radius: 15px;
	overflow: hidden;
	font-family: "Raleway", "Roboto", sans-serif;
	width: 100%;
	margin: 10px 0;
	-webkit-box-shadow: 2px 9px 56px -5px rgba(0, 0, 0, 0.62);
	-moz-box-shadow: 2px 9px 56px -5px rgba(0, 0, 0, 0.62);
	box-shadow: 2px 9px 56px -5px rgba(0, 0, 0, 0.62);
}
.weatherCard-tempDetails {
	height: 100%;
	width: 100%;
}
.tempDetails-location {
	text-align: center;
	margin: 7px;
	padding: 4px;
	font-size: 3rem;
	color: rgb(87, 85, 85);
	text-transform: capitalize;
}
.tempDetails-currentTemp {
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	margin: 10px;
	padding: 5px;
}
.currentTemp-image {
	height: 100%;
	margin-right: 1px;
}
.currentTemp-image > img {
	height: 100px;
	width: 100px;
}
.currentTemp-temp {
	font-size: 2.2rem;
	display: flex;
	align-items: center;
}
.currentTemp-temp > span {
	font-size: 54%;
}
.tempDetails-weather {
	text-align: center;
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 1.5em;
	text-transform: capitalize;
}
.tempDetails-date {
	text-align: center;
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 1em;
}
.tempDetails-stats {
	display: flex;
	justify-content: space-evenly;
}
.stats {
	display: flex;
	flex-flow: column;
	justify-content: center;
	padding: 10px;
}
.stats-wind {
	display: flex;
	flex-flow: row wrap;
	margin: 5px;
}
.wind-image {
	margin: auto 0;
}
.wind-stat {
	padding: 10px;
	font-size: 1.4em;
}
.wind-stat > span {
	font-size: 50%;
	text-transform: uppercase;
}
.stats-humidity {
	display: flex;
	flex-flow: row wrap;
	margin: 5px;
}
.humidity-image {
	margin: auto 0;
}
.humidity-image > img {
	height: 16px;
	width: 16px;
}
.humidity-stat {
	padding: 10px;
	font-size: 1.4em;
}
.humidity-stat > span {
	font-size: 50%;
}
.stats-space {
	margin: auto;
}
.stats-tempRange {
	display: flex;
	flex-flow: column;
	justify-content: center;
	padding: 10px;
}
.tempRange-high {
	display: flex;
	flex-flow: row wrap;
	margin: 5px;
}
.high-image {
	margin: auto 0;
}
.high-stat {
	padding: 10px;
	font-size: 1.4em;
}
.high-stat > span {
	font-size: 70%;
}
.tempRange-low {
	display: flex;
	flex-flow: row wrap;
	margin: 5px;
}
.low-image {
	margin: auto 0;
}
.low-stat {
	padding: 10px;
	font-size: 1.4em;
}
.low-stat > span {
	font-size: 70%;
}
.weatherCard-forecast {
	padding: 0;
}
.list-group > .list-group-item {
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.item-image img {
	height: 50px;
	width: 50px;
}
.item-date {
	font-size: 2rem;
	text-transform: capitalize;
	font-weight: bold;
}
.item-temperatures {
	font-size: 0.9em;
	font-style: italic;
}
.high-temp span:last-child,
.low-temp span:last-child {
	font-size: 90%;
}
</style>

<script>
import WeatherService from "@/services/WeatherService";
import Navbar from "@/components/Navbar.vue";
import Search from "@/components/Search.vue";
import AppFooter from "@/components/AppFooter.vue";
import moment from "moment";

export default {
	name: "WeatherDashboard",
	components: {
		Search,
		Navbar,
		AppFooter
	},
	data() {
		return {
			moment
		};
	},
	computed: {
		getErrors() {
			return this.$store.state.errors;
		},
		getWeatherCards() {
			return this.$store.state.weatherCard;
		},
		getForecast(id) {
			return this.$store.getters.forecastById;
		},
		getWeatherForecast() {
			return this.$store.state.weatherForecast;
		},
		getUnit() {
			return this.$store.state.unit;
		}
	},
	methods: {
		convertTemp(temp) {
			if (this.getUnit.temp === "F") {
				return (temp * (9 / 5) - 459.67).toFixed(0);
			}
			if (this.getUnit.temp === "C") {
				return (temp - 273.15).toFixed(0);
			}
			return temp.toFixed(0);
		},
		convertSpeed(speed) {
			if (this.getUnit.speed === "mph") {
				return (speed * 0.6213711922).toFixed(0);
			}
			if (this.getUnit.speed === "km/h") {
				return (speed * 1.609344).toFixed(0);
			}
		},
		getGeolocation() {
			this.$store.dispatch("getWeatherByGeolocation");
		},
		searchLocation() {
			this.$refs.search.submit();
		},
		removeCard(index) {
			this.$store.dispatch("removeCard", { index });
		}
	}
};
</script>

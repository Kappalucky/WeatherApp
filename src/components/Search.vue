<template>
	<div id="search">
		<!-- Error Message Field -->
		<transition
			enter-active-class="animated fadeInUp shake"
			leave-active-class="animated fadeOutDown"
		>
			<div v-show="error.status === true" class="error error-message">
				<span>{{ error.value }}</span>
			</div>
		</transition>

		<!-- Input Field -->
		<form class="active-purple-4" @submit.prevent="submit">
			<input
				v-model="inputValue.value"
				:class="{ error: error.status === true }"
				class="form-control"
				name="cityInput"
				type="text"
				placeholder="Enter a city or zipcode"
				aria-label="Search"
				@keydown.enter.native="submit"
			>
		</form>
	</div>
</template>
<script>
const zipRegExp = /^\d{5}(?:[-\s]\d{4})?$/;

export default {
	name: "Search",
	data() {
		return {
			inputValue: {
				value: "",
				valid: true,
				zip: false
			},
			error: {
				value: "",
				status: false
			}
		};
	},
	watch: {
		"inputValue.value": function(value) {
			this.validate(value);
		}
	},
	methods: {
		submit() {
			this.validate(this.inputValue.value);

			if (this.inputValue.valid) {
				if (this.inputValue.zip === false) {
					this.error.status = false;
					this.error.value = "";
					this.$store.dispatch("getWeatherByName", this.inputValue.value);
				} else {
					this.error.status = false;
					this.error.value = "";
					this.$store.dispatch("getWeatherByZip", this.inputValue.value);
				}
			} else {
				this.error.status = true;
				this.error.value = "Invalid Data";
			}
		},
		validate(value) {
			if (
				this.inputValue.value === "" ||
				this.inputValue.value.length < 2 ||
				this.inputValue.value === undefined
			) {
				this.inputValue.valid = false;
				this.error.status = true;
				this.error.value = "Please enter a Location.";
			} else {
				this.inputValue.zip = this.isZip(value);
				if (this.inputValue.zip === true) {
					this.inputValue.valid = true;
					this.error.status = false;
					this.error.value = "";
				} else {
					this.inputValue.valid = true;
				}
			}
		},
		isZip(value) {
			return zipRegExp.test(value);
		}
	}
};
</script>

<style scoped>
.modal {
	display: flex;
}
form .error {
	border-color: #e94b35 !important;
}
.error-message {
	color: #e94b35;
	padding-bottom: 0.4em;
}
#current-temp {
	display: flex;
	align-content: center;
	justify-content: center;
	font-size: 2em;
}
#weather-icon img {
	width: 100px;
	height: 100px;
}
#temp-now {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

<template>
  <section class="weatherInfo">
    <section class="banner">
      <div class="banner--container">
        <div class="banner--container_content">
          <!--Wind Speed-->
          <div id="wind">
            <span id="label">Wind:</span>
            <span id="value">
              <span id="number">{{ data.wind.speed }}</span>
              <span id="unit">mph</span>
            </span>
          </div>
        </div>
        <div class="banner--container_content">
          <div id="humidity">
            <span id="label">Humidity:</span>
            <span id="value">
              <span id="number">{{ data.main.humidity }}</span>
              <span id="unit">%</span>
            </span>
          </div>
        </div>
        <div class="banner--container_content">
          <div id="dew_point">
            <span id="label">Dew Pt:</span>
            <span id="value">
              <span id="number">{{ dewPoint() }}</span>
              <span id="unit">˚</span>
            </span>
          </div>
        </div>
        <div class="banner--container_content">
          <!--Not Implemented Yet-->
          <div id="uv_index">
            <span id="label">UV Index:</span>
            <span id="value">
              <span id="number">0</span>
            </span>
          </div>
        </div>
        <div class="banner--container_content">
          <div id="visibility">
            <span id="label">Visibility:</span>
            <span id="value">
              <span id="number">{{ data.visibility }}</span>
              <span id="unit">m</span>
            </span>
          </div>
        </div>
        <div class="banner--container_content">
          <div id="pressure">
            <span id="label">Pressure:</span>
            <span id="value">
              <span id="number">{{ data.main.pressure }}</span>
              <span id="unit">mb</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'InfoBanner',
  props: [
    'data',
  ],
  data() {
    return {
      unitStatus: {
        temp: 'F',
      },
    };
  },
  methods: {
    dewPoint() {
      if (this.unitStatus.temp === 'F') {
        // Converts Kelvin to Fahrenheit
        const temperature = ((this.data.main.temp * (9 / 5)) - 459.67);
        return (temperature - ((9 / 25) * (100 - this.data.main.humidity))).toFixed(0);
      } else if (this.unitStatus.temp === 'C') {
        const temperature = (this.data.main.temp - 273.15); // Converts Kelvin to Celsius
        return (temperature - ((100 - this.data.main.humidity) / 5)).toFixed(0);
      }
    },
    convertTemp(temp) {
      if (this.unitStatus.temp === 'F') {
        return ((temp * (9 / 5)) - (459.67)).toFixed(0);
      }
      if (this.unitStatus.temp === 'C') {
        return (temp - 273.15).toFixed(0);
      }
      return temp.toFixed(0);
    },
  },
};
</script>

<style scoped>
.weatherInfo {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.banner {
  background-color: #f7f7f7;
  min-width: 100%;
  min-height: 50px;
  display: flex;
  overflow-x: auto;
  justify-content: flex-start;
}
.banner--container {
  display: flex;
  margin: 0 auto;
}
.banner--container_content {
  min-width: 100px;
  padding: 0 4px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#label {
  font-weight: bold;
  font-family: 'Scope One';
}
#value {
  margin-left: 4px;
  font-family: 'Arima Madurai';
  color: black;
}
#value span:first-child {
  margin-right: 2px;
}
</style>

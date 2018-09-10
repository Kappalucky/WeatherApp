<template>
  <section id="current-temp">
    <div id="title">
      <span id="current">
        <span id="weather-icon">
          <i id="'owf owf-' + data.cod"/>
          <img
            :src="'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'">
        </span>
        <span id="temp-description">
          <span id="temp-sum"><span>{{ convertTemp(data.main.temp) }}˚</span><span style="paddingLeft: 5px">{{ data.weather[0].description }}</span></span>
          <span id="high-low">
            <span>
              <span id="label">
                Feels Like:
              </span>
              <span id="value">
                {{ convertTemp(data.main.temp) }}˚
              </span>
            </span>
            <span>
              <span id="label">
                Low:
              </span>
              <span id="value">
                {{ convertTemp(data.main.temp_min) }}˚
              </span>
            </span>
            <span>
              <span id="label">
                High:
              </span>
              <span id="value">
                {{ convertTemp(data.main.temp_max) }}˚
              </span>
            </span>
          </span>
        </span>
      </span>
      <span id="full-description">
        {{ weatherMessage(convertTemp(data.main.temp)) }}
      </span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'CurrentTemp',
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
    convertTemp(temp) {
      if (this.unitStatus.temp === 'F') {
        return ((temp * (9 / 5)) - (459.67)).toFixed(0);
      }
      if (this.unitStatus.temp === 'C') {
        return (temp - 273.15).toFixed(0);
      }
      return temp.toFixed(0);
    },
    weatherMessage(temp) {
      if (temp >= 76) {
        return "It's hot my guy!";
      }
      if (temp >= 68 && temp <= 75) {
        return "It's pretty cool";
      }
      if (temp >= 55 && temp <= 67) {
        return "Whooo it's getting cold!";
      }

      return "It's brick ****!, Good Luck";
    },
  },
};
</script>

<style scoped>
#current-temp {
  margin: 0 auto;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#current {
  display: flex;
  align-items: center;
  justify-content: center;
}
#title {
  font-size: 32px;
  text-align: center;
  margin: 12px 15px;
  font-family: 'Nixie one';
}
#weather-icon {
  width: 100px;
  height: 100px;
  display: inline-block;
  margin: 3px 10px 3px 6px;
}
#weather-icon img {
  height: 100px;
  width: 100px;
}
#temp-description {
  font-weight: 600;
  text-align: left;
  position: relative;
  top: 7px;
  line-height: 1.3em;
  margin-bottom: 15px;
}
#temp-sum {
  display: inline-block;
}
#high-low {
  display: flex;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5;
}
#high-low span:first-child {
  margin-left: 0;
}
#high-low > span {
  margin: 0 3px;
}
#label {
  font-weight: 400;
  font-family: 'Scope One';
}
#full-description {
  font-size: 28px;
  font-weight: 300;
  margin-bottom: 6px;
  top: 0;
  position: relative;
  display: block;
  line-height: 1.3em;
  font-family: 'Nixie One';
}
</style>

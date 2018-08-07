<template>
  <!--<section id="info-banner">
    <div
      id="details"
      class="">
      <div
        id="wind"
        class="px-4 card">
        <div class="card-body">
          <span id="label">Wind:</span>
          <span id="values">
            <span id="number">3</span>
            <span id="unit">mph</span>
            <span id="direction">-></span>
          </span>
        </div>
      </div>
      <div
        id="humidity"
        class="px-4 card">
        <div class="card-body">
          <span>Humidity: </span>
          <span>
            <span>45</span><span>%</span>
          </span>
        </p></div>
      </div>
      <div
        id="dew"
        class="px-4 card">
        <div class="card-body">
          <span id="label">Dew Pt:</span>
          <span id="values">
            <span id="number">79</span>
            <span id="unit">˚</span>
        </span></div>

      </div>
      <div
        id="breakpoint"
        class="px-4"/>
      <div
        id="uvIndex"
        class="px-4 card">
        <div class="card-body">
          <span id="label">UV Index:</span>
          <span id="values">
            <span id="number">0</span>
        </span></div>

      </div>
      <div
        id="visibility"
        class="px-4 card">
        <div class="card-body">
          <span id="label">Visibility:</span>
          <span id="values">
            <span id="number">10</span>
            <span id="unit">mi</span>
        </span></div>

      </div>
      <div
        id="pressure"
        class="px-4 card">
        <div class="card-body">
          <span id="label">pressure:</span>
          <span id="values">
            <span id="number">1056</span>
            <span id="unit">mb</span>
          </span>
        </div>
      </div>
    </div>
  </section>-->
  <section class="weatherInfo">
    <section class="banner">
      <div class="banner--content">
        <p>Text</p>
      </div>
      <div class="banner--content">
        <p/>
      </div>
      <div class="banner--content">
        <p/>
      </div>
      <div class="banner--content">
        <p/>
      </div>
      <div class="banner--content">
        <p/>
      </div>
      <div class="banner--content">
        <p/>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'InfoBanner',
};
</script>

<style scoped>
/*#info-banner {
  background-color: grey;
  min-height: 46px;
  min-width: 100%;
}
#details {
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  padding: 1%;
  justify-content: space-between;
}
.card {
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.card-body {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
}*/
.weatherInfo {
  background-color: #8e44ad;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.banner {
  background-color: #fff;
  min-width: 100%;
  min-height: 100px;
  display: flex;
  overflow-x: auto;
}
.banner--content {
  background-color: #e74c3c;
  min-width: 200px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

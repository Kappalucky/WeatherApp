<template>
  <section id="current-temp">
    <div id="title">
      <span id="current">
        <span id="weather-icon">
          <!--<i id="'owf owf-' + weatherDataNow.cod"/>-->
          <img src="https://png.icons8.com/metro/100/000000/sun.png">
        </span>
        <span id="temp-description">
          <span id="temp-sum">87˚ Description word</span>
          <span id="high-low">
            <span>
              <span id="label">
                Feels Like:
              </span>
              <span id="value">
                84˚
              </span>
            </span>
            <span>
              <span id="label">
                Low:
              </span>
              <span id="value">
                77˚
              </span>
            </span>
            <span>
              <span id="label">
                High:
              </span>
              <span id="value">
                89˚
              </span>
            </span>
          </span>
        </span>
      </span>
      <span id="full-description">
        It's hot my guy!
      </span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'CurrentTemp',
};
</script>

<style scoped>
#current-temp {
  margin: 0 auto;
  width: 100%;
  height: 200px;
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
  width: 60px;
  height: 60px;
  display: inline-block;
  margin: 3px 10px 3px 6px;
}
#weather-icon img {
  height: 60px;
  width: 60px;
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

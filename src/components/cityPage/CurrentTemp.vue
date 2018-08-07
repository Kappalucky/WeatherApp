<template>
  <section id="current-temp">
    <div id="currentInfoTemp">
      <div id="title_head">
        <span id="current-label">
          <span id="weather-icon">
            <i id="'owf owf-' + weatherDataNow.cod"/>
          </span>
          <span id="temp-big">87deg Description word</span>
          <span id="temp-sum">
            <span id="high-temp-sum">
              <span id="high-label">High</span>
              80
            </span>
          </span>
          <span id="low-temp-sum">
            <span id="low-label">Low:</span>
            60
          </span>
        </span>
        <span id="full-description">
          totally hot as fuck my guy
        </span>
      </div>
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
  background-color: lavender;
}
</style>

<template>
  <section id="time-chart">
    <div id="byTime">
      <div id="time-blocks">
        <!--For each array in time-->
        <div id="status">
          <span id="word">clear</span>
          <br>
          <span id="time">Now</span>
          <span
            id="time val">78deg</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TimeChart',
};
</script>

<style scoped>
#time-chart {
  background-color: bisque;
}
</style>

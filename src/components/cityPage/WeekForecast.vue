<template>
  <section id="week-forecast">
    <div id="forecast">
      <div id="summary">
        <h3>Cloudy with a chance of meatballs</h3>
      </div>
      <table class="table table-striped table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
export default {
  name: 'WeekForecast',
};
</script>
<style scoped>
#week-forecast {
  background-color: darksalmon;
}
</style>

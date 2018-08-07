<template>
  <section id="week-forecast">
    <div id="forecast">
      <div id="summary">
        <h3>Cloudy with a chance of meatballs</h3>
      </div>
      <div
        class="accordion"
        role="tablist"
        aria-multiselectable="true">
        <div class="card">
          <div
            class="card-header"
            role="tab">
            <table class="table-borderless table-hover">
              <th scope="col"><h5 class="mb-0">Icon</h5></th>
              <th scope="col"><h5 class="mb-0"><i class="fa fa-angle-down rotate-icon"/></h5></th>
            </table>
          </div>
        </div>
        <table class="table table-borderless table-hover">
          <thead>
            <tr>
              <th scope="col">Icon</th>
              <th scope="col">Day</th>
              <th scope="col">Low</th>
              <th scope="col">High</th>
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
}
#summary {
  text-align: center;
}
</style>

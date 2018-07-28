<template>
  <div id="city-forecast">
    <!-- Card View - Detailed -->
    <b-card-group deck>
        <b-card title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Img"
          img-top>
          <p class="card-text">
            This is a wider card with supporting text below as a
            natural lead-in to additional content. This content
            is a little bit longer.
          </p>
          <div slot="footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </b-card>

        <b-card title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Img"
          img-top>
          <p class="card-text">
            This card has supporting text below as a natural lead-in
            to additional content.
          </p>
          <div slot="footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </b-card>

        <b-card title="Title"
          img-src="https://picsum.photos/300/300/?image=41"
          img-alt="Img"
          img-top>
        <p class="card-text">
          This is a wider card with supporting text below as a natural
          lead-in to additional content. This card has even longer content
          than the first to show that equal height action.
        </p>
        <div slot="footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
        </b-card>
    </b-card-group>
    <!-- End Card View - Detailed -->

    <!-- List View - Simple -->
    <b-card no-body header="<b>Card with flush list group</b>">
    <b-list-group flush>
      <b-list-group-item href="#">Cras justo odio</b-list-group-item>
      <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
    </b-list-group>
    <b-card-body>
      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
      nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua
      consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris
      ad sit ipsum anim Lorem.
    </b-card-body>
  </b-card>
  <!-- End List View - Simple -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CityForecast',
  computed: mapState([
    'user',
  ]),
};
</script>

<style scoped>

</style>

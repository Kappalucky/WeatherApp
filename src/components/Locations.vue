<template>
  <div id="Locations">
      <!-- City overview list component goes here -->
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Locations',
  computed: mapState([
    'user',
  ]),
};
</script>

<style scoped>

</style>

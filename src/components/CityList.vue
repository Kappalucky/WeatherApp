<template>
  <div id="city-list">
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'CityList',
  data() {
    /*  return {
          fields: [
              {
                  key: 'Temp',
                  sortable: true,
              },
              {
                  key: '',
                  sortable: false,
                  _rowVariant: 'danger', // Use for heat
              },
              city: {
                  key: 'address.city',
              },
              'address.country': {
                  label: 'Country',
                },
            ],
        } */
  },
};
</script>

<style scoped>

</style>

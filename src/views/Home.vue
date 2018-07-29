<template>
  <main id="search_page">
    <h1>Testing</h1>
    <!--Centered Form component goes here-->
    <input>
    <button>Test button</button>
    <home/>
  </main>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue';

export default {
  name: 'Home',
  components: {
    Home,
  },
};
</script>

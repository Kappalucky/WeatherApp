<template>
  <div class="dashboard">
    <b-container>
      <b-row>
        <b-col>
          <!--<graphs></graphs>-->
          <img src="@/assets/logo.png">
          <h1>{{ msg }}</h1>
        </b-col>
        <!--<b-col></b-col>-->
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.dashboard {
  text-align: center;
}
</style>

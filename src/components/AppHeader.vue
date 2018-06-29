<template>
  <div id="header">
    <b-navbar toggleable="md">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand><router-link to="/">Dashboard</router-link></b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
        <!--<b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>-->
        <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
            <b-img rounded="circle" blank blank-color="#777" alt="img" class="m-1"/>
            <em>{{ user }}</em>
            </template>
            <b-dropdown-item class="drop-down-text">Settings</b-dropdown-item>
            <b-dropdown-item to="/login" class="drop-down-text">Login</b-dropdown-item>
            <b-dropdown-item class="drop-down-text">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
    </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'header',
  computed: mapState([
    'user',
  ]),
};
</script>

<style scoped>
nav {
    background-color: #8A9EB2;
}

nav a {
    color: white;
    text-decoration-style: none;
}

nav img {
    height: 35px;
    width: 35px;
}

nav a:hover {
    color: black;
}

.drop-down-text {
    color: black;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
}
</style>


<template>
  <header class="main-header" ref="header">
    <div class="header-container flex align-center space-between">
      <router-link to="/"><div class="main-logo">Binderr<span>.</span></div></router-link>
 <app-filter to="/app-filter" class="header-filter"  @setFilter="setFilter"></app-filter>
    <nav class="main-header-nav" ref="nav" v-bind:style="{ position: stickyNav ? 'fixed' : 'static' }">
    <ul class="nav-bar clean-list flex">
      <li><router-link to="/gig">Explore</router-link></li>
      <li><router-link to="/">Become a Seller</router-link></li>
      <li><router-link to="/">Sign In</router-link></li>
      <button><router-link to="/">Sign In</router-link></button>

      <!-- <li><router-link to="/about">About</router-link></li> -->
 </ul>
    </nav>
    </div>
    
  </header>
</template>

<script>
import appFilter from "../cmps/app-filter.cmp.vue";
export default {
  tempalte: ``,
  components:{
    appFilter,
  },
  data: () => {
  return {

    stickyNav: false,
    };
  },
   methods: {
      setFilter(filter) {
      filter = JSON.parse(JSON.stringify(filter));
      this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
    },
  },

}
// </script>
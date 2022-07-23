
<template>
  <header class="top-header" :class="[altBackground ? 'header-black' : 'header-red']" >
    <div class="header-row-container main-layout" >
        <!-- <button class="menu-toggle">☰</button> -->
     <div class="main-logo-container"><router-link to="/"><h1 class="main-logo">binderr<span>.</span></h1></router-link></div>
 <app-filter to="/app-filter" class="header-filter"  @setFilter="setFilter"></app-filter>
    <nav class="top-header-nav-bar-container" >
      <div class="nav-helper"></div>
      <!-- ref="nav" v-bind:style="{ position: stickyNav ? 'fixed' : 'static' }" -->
    <ul class="nav-bar clean-list flex">
      <li><router-link to="/gig">Explore</router-link></li>
      <!-- <li><i class="fa-light fa-globe"></i></li> -->
      <li><router-link to="/">Become a Seller</router-link></li>
      <li><router-link to="/">Sign In</router-link></li>
      <!-- <li><router-link to="/"><el-button type="success" plain class="join-btn">Join</el-button></router-link></li> -->
      <li><router-link to="/"><el-button type="info" plain class="join-btn">Join</el-button></router-link></li>
<!-- <button class="join-btn"></button> -->
      <!-- <li><router-link to="/about">About</router-link></li> -->
 </ul>
    </nav>
    </div>
    
  <hr class="header-line full">
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
  computed:{
         altBackground() {
          const path = this.$route.path.split('/')
          console.log('path',path)
          return path[path.length-1].toLowerCase() === ''
      }
  }

}
</script>

<style>
 .header-red {
     /* opacity: 0; */
     background-color: rgb(255, 255, 255);
    
 }
  .header-black {

    background-color: rgba(255, 0, 0, 0);
   
      position: sticky;
      top: 0;
      z-index: 99;
      /* opacity: .1; */
  }
</style>
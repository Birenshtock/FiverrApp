
<template>
  <header class="top-header" >
    <div class="header-row-container main-layout">
       
     <div class="main-logo-container"><router-link to="/"><h1 class="main-logo">binderr<span>.</span></h1></router-link></div>
 <app-filter class="header-filter"  @setFilter="setFilter"></app-filter>
    <nav class="top-header-nav-bar-container" >
      <div class="nav-helper"></div>
     
    <ul class="nav-bar clean-list flex">
      <li><router-link to="/gig">Explore</router-link></li>
      
      <li><router-link to="/">Become a Seller</router-link></li>
      <li><router-link to="/">Sign In</router-link></li>
    
      <li><router-link to="/"><el-button type="info" plain class="join-btn">Join</el-button></router-link></li>

    
 </ul>
    </nav>
    </div>
  <hr class="header-line full">

    <catagory-filter class="catagory-filter"></catagory-filter>

  </header>
</template>

<script>
import appFilter from "../cmps/app-filter.cmp.vue";
import catagoryFilter from "../cmps/catagory-filter.cmp.vue";
export default {
  tempalte: ``,
  components:{
    appFilter,
    catagoryFilter
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
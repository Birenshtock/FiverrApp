
<template>
  <header class="top-header full" >
    <div class="header-row-container">
      <div class="main-logo-container">
      <button class="menu-toggle"><i class="fa-solid fa-bars"></i></button> 
       <router-link to="/"><h1 class="main-logo">binderr<span>.</span></h1></router-link>
      </div>
     
     <app-filter to="/app-filter" @setFilter="setFilter" :class="[isFilterDisplayed&&altBackground ? 'displaySearch' : '', !isFilterDisplayed&&altBackground? 'display':'',
!altBackground?'filter-catagory':'']"></app-filter>
     
    <nav class="top-header-nav-bar-container">
    <ul class="nav-bar clean-list flex">
      <li class="move"><router-link to="/gig">Explore</router-link></li>
      <li class="move"><router-link to="/">Become a Seller</router-link></li>
      <li><router-link to="/">Sign In</router-link></li>
       <button class="join-btn">Join</button>
    </ul>
    </nav>
    </div>


<catagory-filter  
:class="[isFilterDisplayed&&altBackground ? 'displayFilter' : '', !isFilterDisplayed&&altBackground? 'displayFilterNone':'',
!altBackground?'filter-catagory':'']"/>
  </header>
</template>

<script>
import appFilter from "../cmps/app-filter.cmp.vue";
import catagoryFilter from "../cmps/catagory-filter.cmp.vue";

export default {
  tempalte: ``,
  components:{
    appFilter,
    catagoryFilter,
   
  },
  data: () => {
  return {
    isFilterDisplayed:false,

    stickyNav: false,
    };
  },
  computed: {
     altBackground() {
          const path = this.$route.path.split('/')
          // console.log('path',path)
          return path[path.length-1].toLowerCase() === ''
      }
  },

   methods: {
      setFilter(filter) {
      filter = JSON.parse(JSON.stringify(filter));
      this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
    },
      handleScroll2(ev){
      //  this.isFilterDisplayed= true
        //  console.log('i am scrolling', window.scrollY)
         if (window.scrollY<200)  this.isFilterDisplayed= false
         if (window.scrollY>200)  this.isFilterDisplayed= true
      }
  },
  created() {
     

    window.addEventListener("scroll", this.handleScroll2)

    
  },
  destroyed() {
    
    window.removeEventListener("scroll", this.handleScroll2);
  },

}
</script>
<style>

.displaySearch{
  display: block
}

.dontDisplaySearch{
  display: none;
}


</style>


<template>
  <header class="main-header" ref="header">
    <div class="header-container">
      <router-link to="/"><div class="main-logo">Binderr<span>.</span></div></router-link>
    <nav class="main-header-nav" ref="nav" v-bind:style="{ position: stickyNav ? 'fixed' : 'static' }">
    <ul class="main-nav clean-list flex">
      <li><router-link to="/gig">Explore</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><gig-filter to="/app-filter"></gig-filter></li>

      
      </ul>
    </nav>
    </div>
    
  </header>
</template>

<script>
export default {
    data: () => {
    return {

      stickyNav: false,
    };
  },

}
// </script>
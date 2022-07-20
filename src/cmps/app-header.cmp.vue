
<template>
  <header class="main-header">
    <div class="header-container">
      <div class="logo">Binderr<span>.</span></div>
    <nav class="main-header-nav" ref="nav" v-bind:style="{ position: stickyNav ? 'fixed' : 'static' }">
    <ul class="main-nav clean-list flex">
      <li><router-link to="/">Home</router-link> |</li>
      <li><router-link to="/gig">Explore</router-link> |</li>
      <li><router-link to="/about">About</router-link> |</li>
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
</script>
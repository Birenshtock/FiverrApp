<template>
  <section class="main-layout">
    <app-header :class="[altBackground ? 'header-red' : 'header-black']" />
    <router-view />
    <app-footer />
  </section>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import appHeader from "./cmps/app-header.cmp.vue";
import appFooter from "./cmps/app-footer.cmp.vue";
export default {
  name: "main-app",
  props: [],
  components: {
    appHeader,
    appFooter,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
     altBackground() {
          const path = this.$route.path.split('/')
          console.log('path',path)
          return path[path.length-1].toLowerCase() === ''
      }
  },

  created() {
     
    this.$store.dispatch({ type: 'loadGigs' })
  },
  unmounted() {},
};
</script>
<style>
 .header-black {
    background-color: rgb(255, 255, 255);
  }
  .header-red {
     background-color: rgba(255, 0, 0, 0);
   
      position: sticky;
       top: 0;
       z-index: 99;
  }
 
</style>



<template>
  <section class="main-layout">
    <app-header
      :class="[altBackground ? 'header-red' : 'header-black', altBackground && isHeaderWhite ? 'bg-white' : '']" />

    <router-view />
    <app-footer />
  </section>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import appHeader from "./cmps/app-header.cmp.vue";
import appFooter from "./cmps/app-footer.cmp.vue";
// import categoryFilter from "./cmps/category-filter.cmp.vue";
export default {
  name: "main-app",
  props: [],
  components: {
    appHeader,
    appFooter,
    // categoryFilter,
  },
  data() {
    return {
      isHeaderWhite: false,
    };
  },
  methods: {
    handleScroll(ev) {
      this.isHeaderWhite = true
      //  console.log('i am scrolling', window.scrollY)
      if (window.scrollY === 0) this.isHeaderWhite = false
    }

  },
  computed: {
    altBackground() {
      const path = this.$route.path.split('/')
      // console.log('path',path)
      return path[path.length - 1].toLowerCase() === ''
    }
  },

  created() {

    this.$store.dispatch({ type: 'loadGigs' })
    window.addEventListener("scroll", this.handleScroll)


  },
  destroyed() {

    window.removeEventListener("scroll", this.handleScroll);
  },
  unmounted() { },
};
</script>
<style>
</style>



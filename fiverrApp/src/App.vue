
<template>
  <section>
    <app-header />
    <router-view />
    <app-footer />
  </section>
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";
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

  created() {
  },
  unmounted() {},
};
</script>

<style>
#main-app{
 text-align: center;
}
</style>



<template>
  <div class="gig-app">
    
    <!-- <gig-filter @setFilter="setFilter" /> -->
    <!-- <gig-list :gigs="gigs" /> -->
  </div>
</template>

<script>
// import gigList from "../cmps/gig-list.cmp.vue";
// import toyFilter from "../components/toy-filter.cmp.vue";
export default {
  template: ``,
  components: {
    // gigList,
    // gigFilter,
  },
  data() {
    return {};
  },
  methods: {

    // setFilter(filter) {
    //   filter = JSON.parse(JSON.stringify(filter));
    //   this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
    // },
  },
  computed: {
    gigs() {
      return this.$store.getters.gigsToDisplay;
    },
  },
  created() {
    
  },
  unmounted() {},
};
</script>

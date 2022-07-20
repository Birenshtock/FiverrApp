<template>
  <section >
    <div class="app-filter">
        <app-filter to="/app-filter" class="main-filter"  @setFilter="setFilter"></app-filter>
    </div>
    <div class="gig-list">
      <gig-list :gigs="gigs" />
    </div>
  </section>



  <!-- <pre>
    {{gigs}}
  </pre> -->
</template>

<script>
import gigList from '../cmps/gig-list.cpm.vue'
import appFilter from "../cmps/app-filter.cmp.vue";

export default {
  name: 'gig-app',
  created() {
    //  console.log('gigs',gigs)
    this.$store.dispatch({ type: 'loadGigs' })
  },
  computed: {
    gigs() {
      return this.$store.getters.gigs
    },
  },
  methods: {
      setFilter(filter) {
      filter = JSON.parse(JSON.stringify(filter));
      this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
    },
  },
  components: {
    gigList,
    appFilter,
    
  },
}
</script>

<style></style>

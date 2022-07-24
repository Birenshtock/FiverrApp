<template>
  <section>
    <h1 class="hcategory">{{ headercategory }}</h1>


    <!-- <div class="app-filter"> -->
    <!-- <app-filter to="/app-filter" class="main-filter"  @setFilter="setFilter"></app-filter> -->
    <!-- </div> -->
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


export default {
  name: 'gig-app',
  data() {
    return {
      // headercategory: '',

    }
  },
  created() {
    //  console.log('gigs',gigs)
    this.$store.dispatch({ type: 'loadGigs' })
    this.headercategory = this.$route.query.category
  },
  computed: {
    gigs() {
      return this.$store.getters.gigs
    },
    headercategory() {

      return this.$route.query.category || "All category"
    }
  },
  methods: {
    //   setFilter(filter) {
    //   filter = JSON.parse(JSON.stringify(filter));
    //   this.$store.dispatch({ type: "setFilterBy", filterBy: filter });
    // },
  },
  components: {
    gigList,


  },
}
</script>

<style>
</style>

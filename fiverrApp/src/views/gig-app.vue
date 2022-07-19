<template>
  <!-- <section >
    <gig-list :gigs="gigs" />
  </section> -->



  <pre>
    {{gigs}}
  </pre>
</template>

<script>
// import gigList from '../cmps/gig-list.vue'

export default {
  name: 'toy-app',
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
   
  },
  components: {
    // gigList,
    
  },
}
</script>

<style></style>


<template>
  <section >
    <div class="filter-container">
    <input  class="filter-input" type="text" placeholder="  What service are you looking for today?">
    <button class="filter-search-btn"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div> 

    </section>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {
        title: '',
        // catagory: this.$route.query.catagory
        // byCatagories: [],
      },
      tags: [
          "logo-design",
          "artisitic",
          "proffesional",
          "accessible"
      ],

    }
  },
  methods: {
    async setFilter() {
      await  this.$route.query.catagory
      console.log('ff', this.$route.query.catagory)
      
      this.$emit('setFilter', {
        ...this.filterBy,
        catagory: this.$route.query.catagory,
      })
    },
  
  },
  computed: {},
  mounted() {},
  watch: {
    '$route.query.catagory'(){
      this.setFilter()
    }
  }
}
</script>
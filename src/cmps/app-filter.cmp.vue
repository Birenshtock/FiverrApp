
<template>
  <section class="main-filter flex">
    <div class="input-container">
    <input type="text" @input="setFilter"
      v-model="filterBy.title"
      placeholder="  What service are you looking for today?"
      clearable
      size="large">
    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
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

<template>
  <section >
    <div class="input-container">
    <input type="text" @input="setFilter"
      v-model="filterBy.title"
      placeholder="  What service are you looking for today?"
      clearable
      size="large">
    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
    
    </div>  

      <!-- <div class="filter-by-catagory">
  <div @click="setCatagory('')">All</div>
  <div @click="setCatagory('Logo')">Logo Design</div>
   <div @click="setCatagory('Wordpress')">Wordpress</div>
  <div  @click="setCatagory('VoiceOver')" >Voice Over</div>
  <div  @click="setCatagory('VideoExplainer')">Video Explainer</div>
  <div  @click="setCatagory('Programming')">Programming</div>
  <div  @click="setCatagory('Illustration')">Illustration</div>
</div>  -->
  
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
    setFilter() {
      console.log('ff')
      
      this.$emit('setFilter', {
        ...this.filterBy,
        catagory: this.$route.query.catagory,
      })
    },
    setCatagory(catagory){
      // this.filterBy.catagory=catagory
      this.$router.push({query: {catagory: catagory}})
      //  const { } = this.$route.params
      //  console.log('hi',this.$route.query.catagory)
      


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
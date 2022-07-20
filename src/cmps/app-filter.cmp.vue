<template>

<div class="filter-by-catagory">
  <div @click="setCatagory('')">All</div>
  <div @click="setCatagory('Logo')">Logo Design</div>
   <div @click="setCatagory('Wordpress')">Wordpress</div>
  <div  @click="setCatagory('VoiceOver')" >Voice Over</div>
  <div  @click="setCatagory('VideoExplainer')">Video Explainer</div>
  <div  @click="setCatagory('Programming')">Programming</div>
  <div  @click="setCatagory('Illustration')">Illustration</div>
</div>



  <section class="main-filter">
    <el-input
      @input="setFilter"
      v-model="filterBy.title"
      placeholder="What service are you looking for?"
      clearable
      size="large"
    />
    </section>
</template>



<script>

export default {
  data() {
    return {
      filterBy: {
        title: '',
        catagory:''
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
      
      this.$emit('setFilter', this.filterBy)
    },
    setCatagory(catagory){
      this.filterBy.catagory=catagory
      this.setFilter()

    },
  },
  computed: {},
  created() {},
}
</script>
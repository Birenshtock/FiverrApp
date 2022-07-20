<template>
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
  },
  computed: {},
  created() {},
}
</script>
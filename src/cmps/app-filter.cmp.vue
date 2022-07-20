<template>
  <section class="main-filter">
    <el-input
      @input="setFilter"
      v-model="filterBy.txt"
      placeholder="Search by toy name..."
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
        txt: '',
        status: '',
        byLabel: [],
        bySort: '',
      },
      labels: [
        'On wheels',
        'Box game',
        'Art',
        'Baby',
        'Doll',
        'Puzzle',
        'Outdoor',
        'Battery powered',
      ],
      stockOptions: ['In stock', 'Out of stock'],
      sortOptions: [
        'Name - Increasing',
        'Price - Increasing',
        'Created - Increasing',
        'Name - Decreasing',
        'Price - Decreasing',
        'Created - Decreasing',
      ],
    }
  },
  methods: {
    setFilter() {
      if (this.filterBy.byLabel[0] === '') this.filterBy.byLabel = []
      this.$emit('setFilter', this.filterBy)
    },
  },
  computed: {},
  created() {},
}
</script>

<template>
  <section>
    <div class="input-container">
      <input class="header-input" type="text" @input="setFilter" v-model="filterBy.title"
        placeholder="  What service are you looking for today?" clearable size="large">
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
        // category: this.$route.query.category
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
      await this.$route.query.category
      console.log('ff', this.$route.query.category)

      this.$emit('setFilter', {
        ...this.filterBy,
        category: this.$route.query.category,
      })
    },

  },
  computed: {},
  mounted() { },
  watch: {
    '$route.query.category'() {
      this.setFilter()
    }
  }
}
</script>
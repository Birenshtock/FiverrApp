<template>
  <section class="gig-list">
    <div class="grid">
      <div v-for="gig in gigs" :key="gig._id">
        <gig-preview :gig="gig" />
      </div>
    </div>
  </section>
</template>

<script>
  import gigPreview from './gig-preview.cmp.vue';

  export default {
    name: 'gigList',
    props: {
      gigs: Array,
    },
    components: {
      gigPreview,
    },
    data() {
      return {};
    },
    created() {},
    methods: {

    },
    computed: {},
    unmounted() {},
  };
</script>
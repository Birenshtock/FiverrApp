
<template>
  <main>
    
    <h1>This is our home page</h1>
    <app-filter to="/app-filter" class="main-filter"  @setFilter="setFilter"></app-filter>

  </main>
</template>

<script>
import appFilter from "../cmps/app-filter.cmp.vue";
   export default {
    comments:{
      appFilter,
    },
   data() {
   return {};
   },
   created() {},
   methods: {},
   computed: {},
   unmounted() {},
   };

</script>


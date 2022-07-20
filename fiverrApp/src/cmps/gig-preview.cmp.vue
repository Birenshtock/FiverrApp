<template>
  <section v-if="gig" class="gig-preview" >
  <img :src="gig.img" alt="">
  <div class="inner-wrappers">
    <img :src="imgUrl" alt="">
  <div class="seller-identifiers">
<h5 class="seller-name" >{{gig.fullname}}</h5>
<span class="seller-rate">Seller Rate</span>
</div>
  </div>
  <a>{{gig.title}}</a>
  <div class="content-info">
   <span>⭐ 5k</span>
  </div>
  <footer class="previw-footer">
   &#10084; 
   <small>STARTING AT</small>
   <span>{{gig.price}}</span>
  </footer>

  
    <router-link class="btn"  :to="'/gig/'+gig._id">Details</router-link>
    



  </section>
</template>
<script>
export default {
  props: {
    gig: Object,
  },
  data() {
    return {};
  },
  methods: {

  },
  computed: {},
  created() {},
  unmounted() {},
};
</script>
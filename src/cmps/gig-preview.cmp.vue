<template>
  <section v-if="gig" class="gig-preview">
    <div class="inner-wrappers">
      <el-carousel trigger="click" height="160px">
        <el-carousel-item v-for="img in gig.imgs" :key="img" >
          <img :src="img" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="seller-identifiers flex">
        <el-avatar :size="24" :src="gig.owner.imgUrl" />
        <a class="seller-name">{{ gig.owner.fullname }}</a>
        <!-- <span class="seller-rate">Seller Rate</span> -->
      </div>
    </div>
    <p class="gig-title">{{ gig.title }}</p>
    <div class="content-info">
      <a>&#9733; 5.0<span>(1K+)</span></a>
    </div>
    <footer class="previw-footer flex">
      <p @click="test" :class="liked">&#10084;</p>
      <div class="flex-col price">
        <small>STARTING AT</small>
        <span>{{ gig.price }}.99 $</span>
      </div>
    </footer>
    <router-link   :to="'/gig/'+gig._id">Details</router-link>
  </section>


  


  
</template>
<script>
export default {
  props: {
    gig: Object,
  },
  data() {
    return {
      like: false,
    };
  },
  methods: {
    test() {
      console.log('testtt')
      this.like = !this.like
    }
  },
  computed: {
    liked() {
      console.log('ike')
      return { red: this.like }
    },
  },
  created() { },
  unmounted() { },
};
</script>

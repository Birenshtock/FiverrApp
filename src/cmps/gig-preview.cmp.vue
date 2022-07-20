<template>
  <section v-if="gig" class="gig-preview" >
    <img :src="gig.img" alt="">
    <div class="inner-wrappers">
      <el-carousel trigger="click" height="230px">
        <el-carousel-item v-for="img in gig.imgs" :key="img">
          <img :src="img" alt="">
        </el-carousel-item>
      </el-carousel>
      <div class="seller-identifiers flex">
        <el-avatar :size="24" :src="gig.owner.imgUrl" />
        <a class="seller-name" >{{gig.owner.fullname}}</a>
        <!-- <span class="seller-rate">Seller Rate</span> -->
      </div>
    </div>
    <a>{{gig.title}}</a>
    <div class="content-info">
      <a>&#9733; 5.0<span>(1K+)</span></a>
    </div>
    <footer class="previw-footer flex">
      <p :onclick="this.like!=this.like" :class="liked">&#10084;</p>
      <div class="flex-col price">
        <small>STARTING AT</small>
        <span>{{gig.price}}.99 $</span>
      </div>
    </footer>
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
    liked(){
      return like? 'red' : ''
    }
  },
  computed: {},
  created() {},
  unmounted() {},
};
</script>

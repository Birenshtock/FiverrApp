
<template>
 <!-- <div id='mydiv' class="full"></div> -->
    <!-- <img class="home-page-image full" src="../styles/imgs/fiverr1.png" alt=""> -->

  <div class="hero-wrapper full">
   <div class="img1"></div>
   <div class="img2"></div>
  </div>
   
  <main class="home-page">

       <h1>Find the perfect <span>   &nbsp; freelance</span> </h1>
       <h1> services for your business</h1>

       <div class="search-input">
        <div class="search"><i class="fa-solid fa-magnifying-glass"></i></div>
         <!-- <el-input class="input" placeholder='Try "building mobile app"'/> -->
         <input  class="input" type="text" placeholder='Try "building mobile app"'>
       
        <button class="button">Search</button>
       </div>

    <!-- <app-filter to="/app-filter" class="main-filter"  @setFilter="setFilter"></app-filter> -->
  </main>

  <div class="media full"> 
     <div class="imgs">
      <div class="trusted">Trusted By:</div>
      <img src="../styles/imgs/Facebook.png" alt="">
      <img src="../styles/imgs/google.png" alt="">
      <img src="../styles/imgs/netflix.png" alt="">
      <img src="../styles/imgs/pg.png" alt="">
      <img src="../styles/imgs/paypal.png" alt="">
   </div>
  </div>



      <h1 class="gallery-title">Popular professional services</h1>
   <div class="gallery">
      <div class="option"  v-for="opt in options"
      :key="opt.name">
         <p>{{opt.description}}</p>
         <h1>{{opt.name}}</h1>
      </div>
      <button class="btn-left"><i class="fa-solid fa-angle-left"></i></button>
      <button class="btn"><i class="fa-solid fa-angle-right"></i></button>
   </div>

   
</template>

<script>
// import appFilter from "../cmps/app-filter.cmp.vue";
   export default {
    comments:{
      // appFilter,
    },
   data() {
   return {
      options: [
         {
            description: 'Unlock growth online',
            name: 'CEO'
         },
         {
            description: 'Customize your site ',
            name: 'WordPress'
         },
         {
            description: 'Sare your message ',
            name: 'Voice Over'
         },
         {
            description: 'Engage your audience',
            name: 'Video Explainer'
         },
         {
            description: 'Level up your site',
            name: 'Programming'
         },
         {
            description: 'Color your dreams',
            name: 'Illustration'
         },
         
         
      ]
  
   };
   },
   created() {
       

    
    // setInterval(()=>{
    //   for(var i=0; i<this.homeImgs.length; i++){
    //     this.currImg=homeImgs[i]
    //     i+1
    //   }
    // },1000000)

   },
   methods: {
    
   
   },
   computed: {},
   unmounted() {},
   };

</script>


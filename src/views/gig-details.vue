<template>
 <lightgallery
        :settings="{ speed: 500, plugins: plugins }"
        :onInit="onInit"
        :onBeforeSlide="onBeforeSlide"
    >
        <a href="img/img1.jpg">
            <img alt="img1" src="img/thumb1.jpg" />
        </a>
        <a href="img/img2.jpg">
            <img alt="img2" src="img/thumb2.jpg" />
        </a>
        ...
    </lightgallery>




  <section class="gig-detalis" v-if="gig">
 
  <!-- <pre>{{gig}}</pre> -->
  <h1>{{gig.title}}</h1>
  <div class="owner-details">
    <img :src="gig.owner.imgUrl" >
    <div class="owner-fullname">{{gig.owner.fullname}}</div>
    <div class="space">&nbsp;|&nbsp;</div>
  
    <!-- <div>{{gig.owner.level}}</div>  -->
    <div class="stars"><span>&#9733;&#9733;&#9733;&#9733;&#9733; 6</span> (73)</div>
  </div>

  <div class="block text-center" m="t-4">
    <el-carousel trigger="click" >
      <el-carousel-item v-for="img in gig.imgs" :key="img">
        <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
        <img :src="img" alt="">
      </el-carousel-item>
    </el-carousel>

    <div class="reviews">
        <h2>What people loved about this seller</h2>
        <button>See all reviews</button>
    </div>

    <div class="about-gig">
        <h2>About This Gig</h2>
      
        <p> {{gig.description}}</p>
        <!-- <p> {{gig.note}}</p> -->
      
        <ul v-for="note in gig.additionalNotes" :key="note">
        <li>{{note}}</li>
        </ul>
    </div>




    <div class="about-seller">
        <img :src="gig.owner.imgUrl" >
        <div class="owner-details">
    
    <div class="owner-fullname">{{gig.owner.fullname}}</div>
    <div>{{gig.owner.level}}</div> 
    <div class="stars">⭐⭐⭐⭐⭐5(73)</div>
    <button>Contact Me</button>
  </div>
    </div>


  <div class="extended-owner-details">
    <ul>
        <li>From /n {{gig.owner.loc}}</li>
        <li>Avg. response time /n {{gig.owner.avgResponceTime}}</li>
        <li>Member since /n {{gig.owner.memberSince}}</li>
        <li>Last delivery /n {{gig.owner.lastDelivery}}</li>
    </ul>
  </div>



  </div>



  </section>
  
</template>

<script>
import { gigService } from '../services/gig-service'


export default {

  name: 'gig-detail',
  data() {
    return {
      gig: null,

    }
  },
  async created() {

    const { gigId } = this.$route.params
    this.gig = await gigService.getById(gigId)


    // if (gigId) gigService.getById(gigId)
        // .then((currToy) => {
        // this.gig = currToy
        // })
    // console.log('gig',this.gig)
    console.log('gig s only.\n✔ 100% ')
   

    
  },
  computed: {
  
  },
  methods: {
   
  },
}
</script>

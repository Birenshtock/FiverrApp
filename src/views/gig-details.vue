<template>
  <section class="gig-detalis" v-if="gig">
    <h1>{{ gig.title }}</h1>
    <div class="owner-details">
      <img :src="gig.owner.imgUrl">
      <div class="owner-fullname">{{ gig.owner.fullname }}</div>
      <div class="space">&nbsp;|&nbsp;</div>
      <div class="stars"><span>&#9733;&#9733;&#9733;&#9733;&#9733; 4.9</span> (730)</div>
    </div>
    <div class="block text-center" m="t-4">
      <!-- <el-carousel :autoplay="false" trigger="click" height="300px">
        <el-carousel-item v-for="img in gig.imgs" :key="img" >
          <img :src="img" alt="">
        </el-carousel-item>
      </el-carousel>
    <div class="flex ">
      <div class="demo-image__preview space1" v-for="img in gig.imgs" :key="img">
      <el-image
        style="width: 100px; height: 100px"
        :src="img"
        @click="showBig(img)"
        :initial-index="findIdx(img)"
        fit="cover"
        />
      </div>
    </div> -->

      <vueper-slides ref="vueperslides1" :touchable="false" fade :autoplay="false" :bullets="false"
        @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })" fixed-height="400px">
        <vueper-slide v-for="(img, i) in gig.imgs" :key="i" :image="img">
        </vueper-slide>
      </vueper-slides>

      <vueper-slides class="no-shadow thumbnails" ref="vueperslides2"
        @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
        :visible-slides="gig.imgs.length" fixed-height="75px" :bullets="false" :touchable="false" :gap="2.5"
        :arrows="false">
        <vueper-slide v-for="(img, i) in gig.imgs" :key="i" :image="img"
          @click.native="$refs.vueperslides2.goToSlide(i)">
        </vueper-slide>
      </vueper-slides>

      <div class="reviews">
        <h2>What people loved about this seller</h2>
        <button>See all reviews</button>
      </div>
      <div class="about-gig">
        <h2>About This Gig</h2>

        <p> {{ gig.description }}</p>
        <!-- <p> {{gig.note}}</p> -->
        <ul v-for="note in gig.additionalNotes" :key="note">
          <li>{{ note }}</li>
        </ul>
      </div>
      <div class="about-seller">
        <img :src="gig.owner.imgUrl">
        <div class="owner-details">
          <div class="owner-fullname">{{ gig.owner.fullname }}</div>
          <div>{{ gig.owner.level }}</div>
          <div class="stars">⭐⭐⭐⭐⭐5(73)</div>
          <button>Contact Me</button>
        </div>
      </div>
      <div class="extended-owner-details">
        <ul>
          <li>From /n {{ gig.owner.loc }}</li>
          <li>Avg. response time /n {{ gig.owner.avgResponceTime }}</li>
          <li>Member since /n {{ gig.owner.memberSince }}</li>
          <li>Last delivery /n {{ gig.owner.lastDelivery }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { gigService } from '../services/gig-service'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

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
    findIdx(img) {
      var imgs = this.gig.imgs
      return +Object.keys(imgs).find((key) => imgs[key] === img)
    },
    showBig(img) {
      console.log('big', img);
    },
  },
  components: {
    VueperSlides,
    VueperSlide
  },
}
</script>
<style>
.thumbnails {
  margin: auto;
  max-width: 500px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
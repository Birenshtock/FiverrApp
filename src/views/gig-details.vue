<template>
  <section class="gig-detalis">
  <pre>Details</pre>
  <pre>{{gig}}</pre>
  <h1>{{gig.title}}</h1>
  <div class="owner-details">
    <img :src="gig.owner.imgUrl" >
    <div>{{gig.owner.fullname}}</div>
    <div>{{gig.owner.level}}</div>

  </div>
  </section>
  
</template>

<script>
import { gigService } from '../services/gig-service'


export default {

  name: 'gig-detail',
  data() {
    return {
      gig: {},

    }
  },
  async created() {

    const { gigId } = this.$route.params
    this.gig = await gigService.getById(gigId)

    // if (gigId) gigService.getById(gigId)
        // .then((currToy) => {
        // this.gig = currToy
        // })
    console.log('gig',this.gig)
   

    
  },
  computed: {
  
  },
  methods: {
   
  },
}
</script>

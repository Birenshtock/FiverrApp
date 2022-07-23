
<template>
      <div class="filter-by-catagory">
  <div @click="setCatagory('')">All</div>
  <div @click="setCatagory('Logo')">Logo Design</div>
   <div @click="setCatagory('Wordpress')">Wordpress</div>
  <div  @click="setCatagory('VoiceOver')" >Voice Over</div>
  <div  @click="setCatagory('VideoExplainer')">Video Explainer</div>
  <div  @click="setCatagory('Programming')">Programming</div>
  <div  @click="setCatagory('Illustration')">Illustration</div>
</div> 
  
 
</template>

<script>

export default {
  
  components:{
   
  },
  data: () => {
  return {

    
    };
  },
   methods: {  
      setCatagory(catagory){
    
      this.$router.push({query: {catagory: catagory}})
      
    },
  },

}
// </script>
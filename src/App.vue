<template>
  
  <NavView />
  <router-view/>
</template>


<script>

import NavView from './components/NavView.vue'
export default {
  name:'app',

  components:{
    NavView,
  }
}
</script>










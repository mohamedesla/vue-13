<template>
  <div v-for="item in post" :key="item" :id="item.id" class="card mb-4">
    <a href="#!"
      ><img
        class="card-img-top"
        src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
        alt="..."
    /></a>
    <div class="card-body">
      <div class="small text-muted">January 1, 2022</div>
      <h2 class="card-title">{{ item.title }}</h2>
      <p class="card-text">
        {{ item.body }}
      </p>
      <router-link :to="`/HomeView/` + item.id">Read more</router-link>
    </div>
  </div>
</template>

<script>
export default {
    name:"PostPractice",

   props:{
        post:Array
    },

    


}
</script>

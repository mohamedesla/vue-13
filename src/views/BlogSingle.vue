<template>
  
  
  <!-- Page content-->
  <div class="container">
    <div class="row">
      <!-- Blog entries-->
      <div class="col-lg-8">
        <!-- Featured blog post-->
        <!-- Featured blog post-->
                    <div class="card mb-4">
                        <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
                        <div class="card-body">
                            <div class="small text-muted">January 1, 2022</div>
                            <h2 class="card-title">{{post.title}}</h2>
                            <p class="card-text">{{post.body}}</p>
                            
                        </div>
                    </div>
      </div>
    </div>
  </div>
  
        <!-- Nested row for non-featured blog posts-->
        
  <!-- Footer-->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">
        Copyright &copy; Your Website 2022
      </p>
    </div>
  </footer>
</template>

<script>

export default {
  name: "BlogSingle",

  

  data: function () {
    return {
     api:"https://jsonplaceholder.typicode.com/posts/" + this.$route.params.id,
     post:[]
    };
  },


   mounted:function(){
      console.log("block mounted")
      this.axios.get(this.api).then((response) => {
        console.log(response.data)
        this.post=response.data
      });
      }
   

   
}


</script>

<template>
  <div class="container">
    <div class="cover">
      <div class="col-md-12">
        <h3 class="text-center">Detail Product</h3>
      </div>
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="col-md-12 img_prod">
            <img src="http://placehold.it/200x100/000" alt="img_prod">
          </div>
          <div class="col-md-12">
            <h4>Product Title {{ id }}</h4>
            <p>Product description</p>
            <a href="#" class="btn btn-success btn-sm">Agregar al carrito</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailProd',
    data() {
      return {
        id: this.$route.params.id,
      }
    }
  }
</script>

<style>
  .cover {
    padding: 20px;
    margin: 40px 20px;
    border: 1px solid #d2e0e6;
  }

  .img_prod img{
    width: 100%;
  }
</style>

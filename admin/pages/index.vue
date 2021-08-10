<template>
  <main>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">All Products</h1>
          <div class="a-spacing-large"></div>
          <a href="#" class="a-button-buy-again">Add a new product</a>
          <a href="#" class="a-button-history margin-right-10">Add a new category</a>
          <a href="#" class="a-button-history margin-right-10">Add a new owner</a>

          <!-- Listing-->
        </div>
      </div>

    </div>
    <div class="a-spacing-large"></div>

    <div class="container-fluid browsing-history">

      <div class="row">
        <div v-for="(product, index) in products" :key='product._id' class="col-xs-2 col-lg-2 col-md-3 col-sm-6 br bb">
          <div class="history-box">
            <div class="text-center">
              <!--Image-->
              <a href="#" class="a-link-normal">
                <img :src="product.photo" class="img-fluid" alt="">
              </a>
              <!--Title-->
              <div class="a-spacing-top-base asin-title">
                <span class="a-text-normal">
                  <div class="p13n-sc-truncated">{{product.title}}</div>
                </span>
              </div>
              <div class="a-row">
                <a href="#">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </a>
                <span class="a-letter-space"></span>
                <span class="a-color-tertiary a-size-small asin-reviews">(1732 )</span>
              </div>
              <!--Price-->
              <div class="a-row">
                <span class="a-size-base a-color-price">
                  <span class="p13n-sc-price">${{product.price}}</span>
                </span>
              </div>
              <!--Buttons-->
              <div class="a-row">
                <a href="#" class="a-button-history margin-right-10">Update</a>
                <a href="#" class="a-button-history margin-right-10">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  //Fetching data before nuxt page finished loading on browser.

  async asyncData({$axios}) {
    try {
      let response = await $axios.$get('http://localhost:3000/api/products')
      return {
        products: response.products
      }
    } catch (err) {

    }
  }
}
</script>

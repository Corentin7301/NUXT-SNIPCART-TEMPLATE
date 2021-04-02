<template>
  <div>
    <div class="flex justify-end mr-4 lg:mr-14">
    
    </div>
    <div class=" flex justify-center lg:justify-around flex-wrap">
      <div class="card flex flex-col items-center w-full lg:w-1/4 mx-3" v-for="product of products" :key="product.slug">
        <nuxt-link :to="{ name: 'products-slug', params: { slug: product.slug } }"
          class="hover:text-primaryColor transition-all">
          <img :src="product.image" :alt="product.name" class=" w-full rounded-xl">
          <p class=" text-center mt-3">{{ product.name }}</p>
        </nuxt-link>
        <button
          class="snipcart-add-item mt-5 mb-12 lg:mb-28 bg-primaryColor rounded-md py-2 px-3 transition-all hover:bg-lightColor hover:text-primaryColor"
          :data-item-id="product.id" :data-item-price="product.price" :data-item-url="product.url"
          :data-item-name="product.name" :data-item-image="product.image" :data-item-description="product.description">
          Ajouter au panier
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    async asyncData({
      $content,
    }) {
      const products = await $content('products').fetch()
      return {
        products
      }
    },
  }

</script>

<style>

</style>

<template>
  <div>
    <div class="flex justify-end mr-4 lg:mr-14">

      <button class="snipcart-checkout mb-14 mr-3">
        <svg class=" w-6 h-6 lg:w-7 lg:h-7 hover:text-primaryColor transition-all " fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
          </path>
        </svg>
      </button>
      <span class="snipcart-total-price mr-2">0,00 €</span>
      (<span class="snipcart-items-count">0</span>)
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

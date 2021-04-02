<template>
  <div class="">
    <div class="flex justify-between">
      <nuxt-link to="/productsGallery">
        <svg class="w-6 h-6 lg:w-7 lg:h-7 ml-4 lg:ml-14 hover:text-primaryColor transition-all" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </nuxt-link>
    </div>
    <div class=" flex flex-col items-center">
      <h1 class=" text-3xl">{{product.name}}</h1>
      <img :src="product.image" :alt="product.name" class=" w-full lg:w-1/2 my-8">
      <h2 class=" text-2xl text-center px-2">{{product.description}}</h2>

      <nuxt-content :document="product" class=" w-full lg:w-1/2 m-auto px-3" />

      <button
        class="snipcart-add-item mt-5 mb-8 bg-primaryColor rounded-md py-2 px-3 transition-all hover:bg-lightColor hover:text-primaryColor"
        :data-item-id="product.id" :data-item-price="product.price" :data-item-url="product.url"
        :data-item-name="product.name" :data-item-image="product.image" :data-item-description="product.description">
        Ajouter au panier
      </button>
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
      params
    }) {
      const slug = params.slug
      const product = await $content('products', slug).fetch()
      return {
        product
      }
    },
  }

</script>

<style>
  .nuxt-content h1 {
    @apply text-primaryColor mb-8 text-5xl;
  }

  .nuxt-content h2 {
    @apply text-primaryColor mt-10 mb-6 text-3xl text-center;
  }

  .nuxt-content h3 {
    @apply text-primaryColor mt-8 mb-4 text-xl;
  }

  .nuxt-content h4 {
    @apply text-primaryColor mt-8 mb-4;
  }

  .nuxt-content p {
    @apply my-4 leading-7 font-normal w-full;
  }

  .nuxt-content code {
    @apply text-primaryColor font-dmMono;
  }

  .nuxt-content pre {
    @apply text-lightColor pl-8 my-4 rounded-md;
  }

  .nuxt-content img {
    @apply bg-backgroundColor my-8 p-3 border-primaryColor rounded-md w-11/12 lg:w-4/5;
  }

  .nuxt-content a {
    @apply text-primaryColor transition-all;
  }

  .nuxt-content a:hover {
    @apply text-lightColor;
  }

</style>

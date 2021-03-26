<template>
  <div class=" ">
    <div class="flex justify-between">
    <nuxt-link to="/commerce">
      <svg class="w-10 h-10 ml-10 hover:text-primaryColor transition-all" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </nuxt-link>
      <button class="snipcart-checkout mb-14 mr-14">
        <svg class="w-8 h-8 hover:text-primaryColor transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
          </path>
        </svg>
      </button>
    </div>
    <div class=" flex flex-col items-center">
      <h1 class=" text-3xl">{{article.name}}</h1>
      <img :src="article.image" :alt="article.name" class=" w-1/2 my-8">
      <h2 class=" text-2xl">{{article.description}}</h2>

      <nuxt-content :document="article" class=" w-1/2 m-auto" />

      <button
        class="snipcart-add-item mt-5 mb-8 bg-primaryColor rounded-md py-2 px-3 transition-all hover:bg-lightColor hover:text-primaryColor"
        :data-item-id="article.id" :data-item-price="article.price" :data-item-url="article.url"
        :data-item-name="article.name" :data-item-image="article.image" :data-item-description="article.description">
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
      const article = await $content('articles', slug).fetch()
      return {
        article
      }
    },
  }

</script>

<style>

  .nuxt-content h1 {
    @apply text-primaryColor mb-8 text-5xl;
  }

  .nuxt-content h2 {
    @apply text-primaryColor mt-10 mb-6 text-3xl;
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

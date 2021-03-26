<template>
  <div>
    <div class="flex justify-end">
      <button class="snipcart-checkout mb-14 mr-14">
        <svg class="w-8 h-8 hover:text-primaryColor transition-all" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z">
          </path>
        </svg>
      </button>
    </div>
    <div class=" flex justify-around flex-wrap">
      <div class="card flex flex-col items-center w-1/4 mx-3" v-for="article of articles" :key="article.slug">
        <nuxt-link :to="{ name: 'articles-slug', params: { slug: article.slug } }"
          class="hover:text-primaryColor transition-all">
          <img :src="article.image" :alt="article.name" class=" w-full rounded-xl">
          <p class=" text-center mt-3">{{ article.name }}</p>
        </nuxt-link>
        <button
          class="snipcart-add-item mt-5 mb-28 bg-primaryColor rounded-md py-2 px-3 transition-all hover:bg-lightColor hover:text-primaryColor"
          :data-item-id="article.id" :data-item-price="article.price" :data-item-url="article.url"
          :data-item-name="article.name" :data-item-image="article.image" :data-item-description="article.description">
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
      const articles = await $content('articles').fetch()
      return {
        articles
      }
    },
  }

</script>

<style>

</style>

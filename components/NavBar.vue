<template>
  <div class=" flex justify-center mb-12 text-center">
    <nuxt-link v-for="item in items" :key="item.name" :to="item.page"
      class=" mx-3 lg:mx-5 text-xl transition-all normal-case hover:text-primaryColor" :exact="item.exactActiveClass">
      {{item.name}}</nuxt-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [{
            name: 'Accueil',
            page: '/',
            exactActiveClass: 'exact'
          },
          {
            name: 'Produits',
            page: '/productsGallery',
            exactActiveLink: 'exact'
          },
          {
            name: 'Contact',
            page: '/contact',
            exactActiveLink: 'exact'
          },
        ]
      }
    },
  }

</script>
<template>
  <div class="container p-2.5 flex flex-col items-center">
    <img :src="this.home.image" :alt="this.$global.siteName" class=" rounded-xl lg:p-0 lg:items-start">
  </div>
</template>

<script>
  export default {

    head() { 
      return {
        title: this.$global.siteName,
        meta: [{
        hid: 'description',
        name: 'description',
        content: this.$global.siteMetaDescription
      }],
     }
    },
    async asyncData({
      $content,
    }) {
      const home = await $content('pages', "home").fetch()
      return {
        home
      }
    },
  }

</script>

<style>

</style>
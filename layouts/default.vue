<template>
  <div id="layout" class="font-quicksand font-medium tracking-widest no-underline text-lightColor">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import blogConfig from "@/site.config.json"
export default {
  data() {
    return {
      blogConfig,
    }
  },
}
</script>
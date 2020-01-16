<template>
  <section id="home" class="page-home-template">
    <app-Banner></app-Banner>
      <app-product></app-product>
      <app-heart></app-heart>
  </section>
</template>

<script>

import secProducts from '@/components/partials/home/secProducts'
import secHeart from '@/components/partials/home/secHeart'
import Banner from '@/components/Banner'


export default {
  name: 'home',
  components: {
    appProduct : secProducts,
    appHeart : secHeart,
    appBanner : Banner,
  }
}
</script>
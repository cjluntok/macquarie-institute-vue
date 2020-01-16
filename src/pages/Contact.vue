<template>
  <section id="contact-template" class="page-contact-template page-template">
    <app-Banner title="Contact Us"></app-Banner>

  </section>
</template>

<script>

import Banner from '@/components/pageBanner'


export default {
  name: 'contact',
  components: {
    appBanner : Banner,
  }
}
</script>
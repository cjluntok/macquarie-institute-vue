<template>
  <section id="about-template" class="page-about-template page-template">
    <app-Banner title="About Macquarie Institute (Sydney, Australia)"></app-Banner>
    <div class="page-content-text container">
        <app-About></app-About>
    </div>
  </section>
</template>

<script>

import Banner from '@/components/pageBanner'
import secAbout from '@/components/partials/about/secAbout'

export default {
  name: 'about',
  components: {
    appBanner : Banner,
    appAbout : secAbout
  }
}
</script>

<style lang="scss">
.page-about-template {
    & p {
        font-size:1.8em;
    }
}
</style>
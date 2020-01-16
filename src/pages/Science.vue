<template>
  <section id="science-template" class="page-science-template page-template">
    <app-Banner title="The Science of HeartMath"></app-Banner>
    <div class="page-content-text container">
        <h3 class="page-content-heading">HeartMath products, tools and techniques are based on over 25 years of scientific research conducted at the HeartMath Institute on the psychophysiology of stress, emotions, and the interactions between the heart and brain. There are over 300 peer-reviewed or independent studies utilizing HeartMath techniques or technologies to achieve beneficial outcomes that have been published.</h3>   
        <hr> 
        <app-Video></app-Video>
        <app-Science></app-Science>

        <hr>

        <app-Sum></app-Sum>
    </div>
  </section>
</template>

<script>

import Banner from '@/components/pageBanner'
import secSum from '@/components/partials/science/secSummary'
import secScience from '@/components/partials/science/secScience'
import secVideo from '@/components/partials/science/secVideo'

export default {
  name: 'science',
  components: {
    appBanner : Banner,
    appSum : secSum,
    appScience :secScience,
    appVideo :secVideo
  }
}
</script>

<style lang="scss">

.page-content-text {
  padding:30px 0;
  & h3 {
    font-size:2em;
    font-weight:normal;
    line-height:1.5em;
  }
}


hr {
  border-top:1px solid rgba(6, 92, 183, 0.274) !important;
}

</style>
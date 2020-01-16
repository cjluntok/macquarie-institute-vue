<template>
  <section class="section-page-banner page-banner-bg container-fluid">
      <div class="container page-banner-text">
          <h1 class="page-banner-title">{{title}}</h1>
      </div>
  </section>    
</template>

<script>
export default {
  name: "page-banner",
  props: {
    title: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.section-page-banner {
    width:100%;
    height:100%;
}
.page-banner-bg {
    min-height:25vh;
    position:relative;
    z-index:1;
    background: linear-gradient(90deg, rgba(27, 180, 222, 0.5), rgba(0, 8, 81,0.8)), url('../assets/images/science-banner.jpg');
    background-attachment: fixed;
    background-size:cover;
    background-position:bottom;
    background-repeat:no-repeat;
    
    & .page-banner-text {
        width:100%;
        height:100%;
        display:flex;
        min-height:25vh;
        padding-left:0;
        padding-right:0;
        justify-content: center;
        align-items: center;

        & .page-banner-title {
            width:100%;
            height:100%;
            text-align:center;
            color:white;
            text-transform:uppercase;
            font-weight:bold;
        }
    }
}
</style>

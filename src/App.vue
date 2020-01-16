<template>
  <div id="app">
    <div id="header--template" class="header-template container-fluid">
      <app-top></app-top>
      <app-nav></app-nav>      
    </div>

      <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import Top from './components/Top'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    appTop : Top,
    appNav : Nav,
    appFooter : Footer
  }
}
</script>

<style lang="scss">

body {
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    background-color: white;
    font-size: 62.5% !important;
    overflow-x: hidden !important;
}

.container-fluid {
  padding-left:0 !important;
  padding-right:0 !important;
}

ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  
  .header-template {
        -webkit-box-shadow: 0px 3px 14px 1px rgba(4,59,140,0.1);
          -moz-box-shadow: 0px 3px 14px 1px rgba(4,59,140,0.1);
          box-shadow: 0px 3px 14px 1px rgba(4,59,140,0.1);
          position:relative;
          min-height:113px;
  }
  
  .logo-container {
      & h1 {
          // padding:20px;
          text-align:left;
          margin:0;
          & img {
              width:auto;
              height:50px;
          }
      }
  
      & a {
          padding:7px 0;
          width:100%;
          height:100%;
          display:block;
      }
  }
  
  .header-template-container {
      max-width:1280px !important;
      & .col {
          padding-right:0;
          padding-left:0;
      }
  }
  
  .header-top-container {
      background:#161725;
  }
  


</style>

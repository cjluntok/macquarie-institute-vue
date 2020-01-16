<template>
    <section id="main-container">
            <div class="header-template-container container">
                    <div class="row">
                        <div class="col col-md-2">
                            <div class="logo-container">
                                <h1><router-link to="/" exact v-scroll-to="'#top'"><img src="@/assets/images/mac-logo.png" class="card-img-top" alt="Logo"></router-link></h1>
                            </div>
                        </div>
                        <div class="col col-md-10">
                            <nav class="nav-container">
                                <ul class="nav-list-container">
                                    <li class="nav-list-item"><router-link to="/" exact v-scroll-to="'#top'">Home</router-link></li>
                                    <li class="nav-list-item"><router-link to="/science" v-scroll-to="'#top'">Science</router-link></li>
                                    <li class="nav-list-item"><a href="https://macquarieinstitute.com/store/heartmath/index.php" target="_blank">Products</a></li>
                                    <li class="nav-list-item"><router-link to="/program" v-scroll-to="'#top'">Our Programs</router-link></li>
                                    <li class="nav-list-item"><router-link to="/about" v-scroll-to="'#top'">Our Story</router-link></li>
                                    <li class="nav-list-item"><router-link to="/contact" v-scroll-to="'#top'">Contact</router-link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
            </div>
    </section>
</template>

<script>
export default {
    mounted() {

        window.onscroll = function() {
            const section = document.querySelector('#main-container');
            if (this.scrollY <= 44) {
                section.className = ""
            } else {
                section.className = "fixed"
            }
        }

    }
}
</script>

<style  lang="scss" scoped>
#main-container {
    
    width: 100%;
    background: white;
    
}

.fixed {
    position:fixed;
    z-index:99;
    top:0;
    -webkit-box-shadow: 0px 3px 14px 1px rgba(4,59,140,0.1);
    -moz-box-shadow: 0px 3px 14px 1px rgba(4,59,140,0.1);
    box-shadow: 0px 3px 14px 1px rgba(4,59,140,0.1);
}

  .nav-container {
      display:flex;
      height:100%;
      width:100%;
  
      .nav-list-container {
          width:100%;
          height:100%;
          margin:0;
          display:flex;
          height:100%;
          align-items:center;
          justify-content: flex-end;
  
          & .nav-list-item {
              font-size:1.4em;
              height:100%;
              border-right:1px solid rgba(216, 216, 216, 0.671);
              margin:0;
              padding:0 20px;
              & a {
                  color:black;
                  display:flex;
                  height:100%;
                  font-weight:600;
                  align-items:center;
                  justify-content:center;
                  min-width:120px;
                  text-transform:uppercase;
                  transition:all 0.3s;
                      &.router-link-exact-active {
                      color:rgb(17, 126, 216);
                      }
                  }
              & a:hover {
                  color:rgb(17, 126, 216);
                  text-decoration: none;
  
              }
          }
      }
   }
</style>
<template>
    <section class="hero-banner-container container-fluid">
          <div class="hero-banner-inner container">
              <div class="row">
                  <div class="col-md-6">
                        <div class="hero-banner-text">
                              <h2>Take charge of how you feel</h2>
                              <p class="text-muted">The Inner Balance&trade; App & Sensor</p>
                              <img class="img-fluid" src="@/assets/images/img.png" alt="">
                              <ul class="hero-banner-list">
                                  <li class="hero-banner-list-item">Release Stress</li>
                                  <li class="hero-banner-list-item">Find Balance</li>
                                  <li class="hero-banner-list-item">Build Resilience</li>
                              </ul>
                              <a href="" target="_blank" class="btn btn-primary">Learn More</a>
                        </div>
                  </div>
                  <div class="hero-banner-img-container col-md-6">
                      <div class="hero-banner-img">
                          <img class=" img-fluid" src="@/assets/images/hero-banner.png" alt="Josh">
                      </div>
                  </div>
              </div>
          </div>
        </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.hero-banner-container {
    background:#e1e7ed;
    
    & .hero-banner-inner {
        padding-top:30px;
        height:100%;
        & .hero-banner-text {
            height:100%;
            display:flex;
            align-items:center;
            flex-direction: column;
            padding:50px 20px;
            & p {
                font-size:1.6em;
            }
            & img {
                height: auto;
                width:200px;
            }
            & .hero-banner-list{
                & .hero-banner-list-item {
                    font-size:1.6em;
                }
            }
        }
        & h2 {
            font-weight:700;
            font-size:5.6em;
            text-transform: uppercase;
            text-align:center;
            }
        }
        & .hero-banner-img {
            display:flex ;
            align-self: flex-end;
            width:100%;
            justify-content: center;
        }
        & .hero-banner-img-container {
            display:flex;
            align-items:flex-end;
        }
}
</style>
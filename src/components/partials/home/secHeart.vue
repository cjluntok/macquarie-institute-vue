<template>
  <section class="page-template-content page-content-container page-content-text">
      <div class="page-content --first">
        <div class="container page-content-items">
            <h2>HeartMath is based on over 26 years of research</h2>
            <div class="row">
                <div class="col-md-6 page-content-img">
                    <img class="img-fluid" src="@/assets/images/plus-heart-color-640.png" alt="">
                </div>
                <div class="col-md-6">
                    <div class="page-content-text">
                        <h3 class="text-muted">Over 300 independent peer-reviewed studies, Recommended by thousands of health professionals.</h3>
                        <h3 class="text-muted">Used by hundreds of hospitals, schools, corporations and humanitarian organizations.</h3>
                        <h3 class="text-muted">And millions of people; and the number is steadily are growing are benefitting from the applications of the HeartMath insights, tools and techniques.</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="page-content --second">
          <div class="container page-content-items">
              <div class="row">
                  <div class="col-md-6">
                      <div class="page-content-text">
                          <h3>Studies conducted with over 11,500* people have shown improvements in mental & emotional well-being in just 6-9 weeks using HeartMath training and technology:</h3>
                          <p>24% improvement in the ability to focus, <strong>46% drop in anxiety</strong><br>
							30% improvement in sleep, <strong>48% drop in fatigue</strong><br>
							38% improvement in calmness, <strong>56% drop in depression</strong><br>
                          </p>
                          <p>* N= 11,903 Percent of individuals responding often to always on normed and validated pre and post Personal and Organizational Quality Assessment (POQA-R).</p>
                      </div>
                  </div>
                  <div class="col-md-6">
                      <img class="img-fluid" src="@/assets/images/image1.png" alt="">
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

.page-content {
    
    padding:60px 0;
    &.--first {
        background-color:#f8f8f8;
    }
    &.--first {
        & .page-content-img {
            display:flex;
            height:100%;
            justify-content: center;
            align-items: center;
        }
    }
    &.--second {
        background-color:#ebf0f5;
    }
    & .page-content-items {
        
        & .row {
            margin:10px 0;
        }
        & h2{
            width:100%;
            font-weight:900;
            font-size:3em;
            text-transform:uppercase;
            text-align:center;
            margin-bottom:50px;
        }

        & .page-content-text {
            display:flex;
            height: 100%;
            width:100%;
            justify-content:center;
            flex-direction: column;
            margin-left:20px;
            & h3 {
                font-size:2.1em;
                margin-bottom:30px;
            }
            & p {
            font-size:1.6em;
            }
        }
    }
}
</style>
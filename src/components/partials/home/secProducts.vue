<template>
    <section class="page-template-content page-content content-bg">
        <div class="container page-content-heading">
            <h2>HeartMath Products and Services Australia</h2>
        </div>
        <div class="container page-product-content">
                <div class="row section-products">
                        <div class="col-sm-2 col-md-2">
                            <a title="Buy emWave Pro" href="https://macquarieinstitute.com/store/heartmath/emwave-pro-c-34.html" target="blank">
                                <div class="card">
                                        <img class="card-img-top" src="@/assets/images/emwave-pro-box-sensor-800x800.png" alt="emwave pro box sensor">
                                        <div class="card-body d-flex justify-content-center">
                                            <div class="card-footer d-flex align-items-center justify-content-center">
                                                    <p class="card-text">emWave Pro</p>
                                            
                                            </div>
                                        </div>
                                </div>
                            </a>
                        </div>

                        <div class="col-sm-2 col-md-2">
                                <a title="Buy emWave 2" href="https://macquarieinstitute.com/store/heartmath/emwave2-c-35.html" target="blank">
                                    <div class="card">
                                            <img class="card-img-top" src="@/assets/images/emWave2_box and device 850x850.png" alt="emwave2 box and device">
                                            <div class="card-body d-flex justify-content-center">
                                                <div class="card-footer d-flex align-items-center justify-content-center">
                                                        <p class="card-text">emWave 2</p>
                                            
                                                </div>
                                            </div>
                                    </div>
                                </a>
                        </div>

                        <div class="col-sm-2 col-md-2">
                                <a title="Buy Add Inner Balance Bluetooth" href="https://macquarieinstitute.com/store/heartmath/inner-balance-bluetooth-products-for-android-iphone-ipad-c-33_45.html" target="blank">
                                    <div class="card">
                                            <img class="card-img-top" src="@/assets/images/Inner Balance Bluetooth.png" alt="Inner Balance Bluetooth">
                                            <div class="card-body d-flex justify-content-center">
                                                <div class="card-footer d-flex align-items-center justify-content-center">
                                                        <p class="card-text">Inner Balance Bluetooth</p>
                                                
                                                </div>
                                            </div>
                                    </div>
                                </a>
                        </div>

                        <div class="col-sm-2 col-md-2">
                                <a title="Buy Inner Balance Lightning" href="https://macquarieinstitute.com/store/heartmath/inner-balance-lightning-products-for-ios-iphone-ipad-c-33_44.html" target="blank">
                                <div class="card">
                                        <img class="card-img-top" src="@/assets/images/inner-balance-box-sensor-6415 800x800.png" alt="inner balance box sensor">
                                        <div class="card-body d-flex justify-content-center">
                                            <div class="card-footer d-flex align-items-center justify-content-center">
                                                    <p class="card-text">Inner Balance Lightning</p>
                                        
                                            </div>
                                        </div>
                                </div>
                            </a>
                        </div>

                        <div class="col-sm-2 col-md-2">
                            <a title="Buy Add Heart Facilitator Package" href="https://macquarieinstitute.com/store/heartmath/add-heart-facilitator-program-p-102.html" target="blank">
                                <div  class="card">
                                        <img class="card-img-top" src="@/assets/images/addheartfacilitator.jpg" alt="add heart facilitator">
                                        <div class="card-body d-flex justify-content-center">
                                            <div class="card-footer d-flex align-items-center justify-content-center">
                                                    <p class="card-text">Add Heart Facilitator Package</p>
                                        
                                            </div>
                                    </div>
                                </div>
                            </a>
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

.page-template-content {
    padding:50px 0;
    & .container {
        max-width:1280px;
    }
}

.page-content-heading {
    display:flex;
    width:100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    & h2 {
        width:100%;
        text-align:center;
        font-weight:900;
        text-transform:uppercase;
        font-weight:3em;
        padding-bottom:30px;
    }
}

.page-product-content {
    display:flex;
    width:100%;
    justify-content: center;
    align-items: center;

    & .section-products {
        display:flex;
        justify-content: center;
        margin:0 15px;
        & .card {
            -webkit-box-shadow: 0px 3px 25px 1px rgba(4,59,140,0.15);
            -moz-box-shadow: 0px 3px 25px 1px rgba(4,59,140,0.15);
            box-shadow: 0px 3px 25px 1px rgba(4,59,140,0.15);
        }
        & .card-img-top {
            width: 100%;
            height: 100%;
            padding:10px 0;
            border-top-left-radius: calc(.25rem - 1px);
            border-top-right-radius: calc(.25rem - 1px);
        }

        & .card-body {
            padding:0;
            display:flex;
        }
        & .card-footer {
            width:100%;
            padding:5px 10px;
            height:60px;
            & p {
                text-align:center
            }
        }

        & a {
            color:#535F8F;
            font-size:1.6em;
        }
    }
}


</style>
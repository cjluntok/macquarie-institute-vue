<template>
    <div id="top" class="header-top-container container-fluid">
        <div class="container header-top-items ">
            <div class="row">
                <div class="col col-md-4">
                    <div class="header-top-text header-top-welcome">
                        <p>Welcome to Australia's Stress Solutions Centre!</p>
                    </div>
                </div>
                <div class="col col-md-8">
                    <div class="header-top-text">
                        <ul class="header-top-list">
                            <li class="header-top-list-item"><a href=""><font-awesome-icon :icon="['fa', 'store']"/>Online Store</a></li>
                            <li class="header-top-list-item"><font-awesome-icon :icon="['fa', 'phone-alt']"/> Tel: (+612) 9412 2500</li>
                            <li class="header-top-list-item"><strong>Chatswood NSW 2067, Australia</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

  .header-top-items {
      max-width:1280px !important; 
      & .col {
          padding-left:0;
          padding-right:0;
      }
      & .header-top-welcome {
          font-size:1.6em;
          display:flex;
          height:100%;
          width:100%;
          align-items:center;
          border-right:1px solid rgba(255, 255, 255, 0.315);
          & p {
              margin:0;
          }
      }
      & .header-top-text {
          color:white;
          & .header-top-list {
              padding:0;
              margin:0;
              font-size:1.6em;
              display:flex;
              height:100%;
              & .header-top-list-item:last-child {
                  border-right:0;
              }
              & .header-top-list-item {
                      padding:10px;
                      border-right:1px solid rgba(255, 255, 255, 0.315);
                      margin:0;
                      width:100%;
                      text-align:center;
                  & a {
                      color:white;
                      display:block;
                      width:100%;
                      height:100%;
                  }
              }
              & svg {
                  margin-right:10px;
              }
          }
      }
  }
</style>
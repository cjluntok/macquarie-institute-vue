<template>
    <section class="loader">
        <h3 class="loading-message">Loading...</h3>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.loader {
    position:fixed;
    width:100%;
    height:100%;
    background-color:white;
    z-index:100;
    top:0;
    left:0;
    background-position:center center;
    background-image:url('../../assets/images/Spinner-1s-200px.gif');
    background-color:aliceblue;

    & .loading-message {
        position:fixed;
        width:100%;
        top: calc( 50% + 20px);
        text-align:center;
    }
}


</style>
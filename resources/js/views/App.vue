<template>
    <div class="wrapper position-relative">
        <canvas-component></canvas-component>
        <header-component></header-component>
        <main>
            <div class="container">
                <transition  name="fade"
                             mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </main>
        <footer-component></footer-component>
    </div>
</template>

<script>

    import HeaderComponent from './template/HeaderComponent'
    import FooterComponent from './template/FooterComponent'
    import CanvasComponent from './template/components/CanvasComponent'

    export default {
        name: "app",
        methods: {
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        },
        components:{
            HeaderComponent,
            FooterComponent,
            CanvasComponent
        }
    }
</script>

<style scoped>
    .wrapper{
        /*overflow: hidden;*/
        /*background-color:#000;*/
        /*background-image: url(/img/bg.png);*/
        /*-webkit-background-size: 100%;*/
        /*background-size: 100%;*/
    }
</style>

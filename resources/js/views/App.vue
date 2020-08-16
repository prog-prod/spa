<template>
    <div class="wrapper position-relative">
        <header-component></header-component>
        <main>
            <transition  name="fade"
                         mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
        <footer-component></footer-component>
    </div>
</template>

<script>

    import HeaderComponent from './template/HeaderComponent'
    import FooterComponent from './template/FooterComponent'
    import PageTemplate from "./PageTemplate";

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
            PageTemplate
        }
    }
</script>

<style lang="scss" scoped>
    .footer {
        b{
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 700;
        }
        a{
            padding:4px 7px;
            border-radius: 50%;
        }
    }
    .wrapper{
        min-height: 100%;
        height: 100%;
        /*overflow: hidden;*/
        /*background-color:#000;*/
        /*background-image: url(/img/bg.png);*/
        /*-webkit-background-size: 100%;*/
        /*background-size: 100%;*/
    }
    main{
        /*min-height: 100%;*/
    }
</style>

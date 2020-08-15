<template>
    <div class="wrapper position-relative">
        <header-component></header-component>
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="page-content">
                            <transition  name="fade"
                                         mode="out-in">
                                <router-view></router-view>
                            </transition>
                            <hr>
                            <div class="footer clearfix">
                                <div class="pull-left">
                                    <b>Follow me, I am in:</b>
                                </div>
                                <div class="pull-right">
                                    <a href="https://www.instagram.com/prog_prog_/" class="btn-instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="https://www.linkedin.com/in/andrii-polyvianyi-01aa93164/" class="btn-linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                                    <a href="https://github.com/Frishka" class="btn-github"><i class="fa fa-github" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer-component></footer-component>
    </div>
</template>

<script>

    import HeaderComponent from './template/HeaderComponent'
    import FooterComponent from './template/FooterComponent'

    export default {
        name: "app",
        methods: {
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        },
        components:{
            HeaderComponent,
            FooterComponent
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
        /*overflow: hidden;*/
        /*background-color:#000;*/
        /*background-image: url(/img/bg.png);*/
        /*-webkit-background-size: 100%;*/
        /*background-size: 100%;*/
    }
</style>

<template>
    <div class="page-content position-relative" :class="{'page-loading' : isLoading}">
        <div class="position-relative page-content-body">
            <slot></slot>
            <pulse-loader :loading="isLoading" color="#007bff"  class="spinner-vue position-absolute"></pulse-loader>
        </div>
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
</template>

<script>


    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    import {mapGetters} from "vuex";

    export default {
        name: "PageTemplate",
        computed:{
            ...mapGetters(['isLoading'])
        },
        components:{
            PulseLoader
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
    .page-content-body{
        min-height: 300px;
    }
    .page-loading{
        opacity: 0.8;
    }
    .v-spinner{
        left:47%;
        top:60%;
    }
</style>

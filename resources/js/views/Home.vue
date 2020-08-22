<template>
    <div class="main inner cover">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="cover-heading mb-3">@prog_prog_ </h1>
                    <p class="lead text-grey-color">Welcome to my personal website! I am a web developer. You can see my portfolio or write to me for further cooperation. </p>
                    <p class="lead mt-4">
                        <router-link class="btn btn-lg btn-primary" :to="{ name: 'contacts' }">Write to me</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        methods:{}
    }
</script>
<style lang="scss" scoped>
    .text-grey-color{
        color:#c5c5c5;
    }
    @media (max-width: 991px ){
        .main{
            margin: 30% auto !important;
        }
    }
    .main{
        h1{
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 700;
        }
        max-width: 400px;
        color:white;
        text-align: center;
        margin: 200px auto;

    }
</style>


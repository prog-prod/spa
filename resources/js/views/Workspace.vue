<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <page-template>
                    <h1 class="page-title">My workspace
                        <small>Comfortable work is a secret to be productive.</small>
                    </h1>

                    <hr>
                    <div class="text-center">
                        <parallax sectionHeight="30">
                            <img src="/img/worspace3.png" alt="very cool bg">
                        </parallax>
<!--                        <parallax :src="'/img/worspace.png'">-->
<!--                            <div slot="loading">loading...</div>-->
<!--                            <div>content</div>-->
<!--                        </parallax>-->
                        <p class="mt-2">

                        </p>
                        <blockquote class="blockquote"><p>A cup of coffee and a lot of interesting
                            tasks are enough for a good and productive day, and daily positive attitude is already have.</p></blockquote>
                        <br />
<!--                        <blockquote class="otro-blockquote">-->
<!--                            For a good and productive day, a cup of coffee and a lot of interesting-->
<!--                            tasks are enough, and the daily positive spirit is already present.-->
<!--                        </blockquote>-->
                    </div>
                </page-template>
            </div>
        </div>
    </div>
</template>

<script>

    import PageTemplate from "./PageTemplate";
    import Parallax from 'vue-parallaxy'

    export default {
        name: "Workspace",
        components: {
            PageTemplate,
            Parallax
        },
        created: () => {

        }
    }
</script>

<style lang="scss" scoped>

    @media screen and (max-width: 768px){
        .Masthead {
             min-height: auto;
        }
    }
    @media screen and (min-width: 768px){
        .Masthead {
            min-height: 40.875rem;
        }
    }
    .Masthead{
        z-index: auto;
    }
    img{
        width:100%;

    }
    @media screen and (max-width: 768px) and (min-width:501px){
        .blockquote:before {
            font-size: 150px !important;
        }
        .blockquote p {
            font-size: 25px !important;
        }
    }
    @media screen and (max-width: 500px){
        .blockquote:before {
            font-size: 150px !important;
        }
        .blockquote p {
            font-size: 15px !important;
        }
    }
    .blockquote {
        padding: 60px 80px 40px;
        position: relative;
    }
    .blockquote p {
        font-family: "Utopia-italic";
        font-size: 35px;
        font-weight: 700px;
        text-align: center;
    }

    /*blockquote p::before {
        content: "\f095";
        font-family: FontAwesome;
       display: inline-block;
       padding-right: 6px;
       vertical-align: middle;
      font-size: 180px;
     }*/

    .blockquote:before {
        position: absolute;
        font-family: 'FontAwesome';
        top: 0;

        content:"\f10d";
        font-size: 200px;
        color: rgba(0,0,0,0.1);

    }

    .blockquote::after {
        content: "";
        top: 20px;
        left: 50%;
        margin-left: -100px;
        position: absolute;
        border-bottom: 3px solid #bf0024;
        height: 3px;
        width: 200px;
    }

    @import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
    .otro-blockquote{
        font-size: 1.4em;
        width:60%;
        margin:50px auto;
        font-family:Open Sans;
        font-style:italic;
        color: #555555;
        padding:1.2em 30px 1.2em 75px;
        border-left:8px solid #78C0A8 ;
        line-height:1.6;
        position: relative;
        background:#EDEDED;
    }

    .otro-blockquote::before{
        font-family:Arial;
        content: "\201C";
        color:#78C0A8;
        font-size:4em;
        position: absolute;
        left: 10px;
        top:-10px;
    }

    .otro-blockquote::after{
        content: '';
    }

    .otro-blockquote span{
        display:block;
        color:#333333;
        font-style: normal;
        font-weight: bold;
        margin-top:1em;
    }

</style>

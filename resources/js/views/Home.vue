<template>
    <div class="main inner cover">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p>
                        <a href="https://ru.stackoverflow.com/users/423313/andrii-polyvianyi"><img src="https://ru.stackoverflow.com/users/flair/423313.png?theme=dark" width="208" height="58" alt="Профиль участника Andrii Polyvianyi на сайте &#171;Stack Overflow на русском&#187;, Вопросы и ответы для программистов" title="Профиль участника Andrii Polyvianyi на сайте &#171;Stack Overflow на русском&#187;, Вопросы и ответы для программистов"></a>
                        <a href="https://stackoverflow.com/users/10215872/andrii-polyvianyi"><img src="https://stackoverflow.com/users/flair/10215872.png" width="208" height="58" alt="profile for Andrii Polyvianyi at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for Andrii Polyvianyi at Stack Overflow, Q&amp;A for professional and enthusiast programmers"></a>
                    </p>
                    <h1 class="cover-heading mb-3">Hello! My name is Andrew.👨‍💻</h1>
                    <p class="lead text-grey-color">Welcome to my personal website! I am a <b><u>Web developer</u></b>. This is my business card site. Here you will find interesting projects that I have worked on and other information about me as well. You can see my portfolio or write to me for further cooperation. Have a nice day! 🙂	</p>
                    <p class="lead mt-4">
                        <router-link class="btn btn-lg btn-primary" :to="{ name: 'contacts' }">Write me <i class="fa fa-envelope" aria-hidden="true"></i></router-link>
                    </p>
                    <p>
                        <a :href="shared_links.github" class="d-inline-block mt-3"><i class="fa fa-github fa-2x text-white" aria-hidden="true"></i></a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";



    export default {
        name: "home",
        computed: {
            ...mapGetters(['shared_links']),
        },
        methods:{}
    }
</script>
<style lang="scss" scoped>
    .text-grey-color{
        color:#c5c5c5;
    }
    @media (max-width: 991px ){
        .main{
            margin: 6% auto !important;
        }
    }
    .main{
        b{
            font-weight: bold;
        }
        h1{
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 700;
        }
        max-width: 600px;
        color:white;
        text-align: center;
        margin: 200px auto;

    }
</style>


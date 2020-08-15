<template>
    <div>
        <h1 class="page-title">About me
            <small>My short review</small>
        </h1>

        <hr>
        <div class="text-center">
            <img src="/img/portfolio-img.png" class="portfolio-img rounded-circle" alt="Cinque Terre">
        </div>
        <h3 class="text-center">Andrii Polyvianyi <small>
            Full stack web developer
        </small></h3>
        <p class="about-me-text">
            Hi everyone! I am a web developer.I work efficiently and I don`t like to frame anyone so I take a responsible in doing the tasks.I constantly learn something new and develop in programming.
        </p>
        <hr>
        <h2 class="page-title mb-4 mt-4">My skills
            <small>My tools of development</small>
        </h2>
        <div id="carouselSkills" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://www.php.net/images/logos/new-php-logo.png" class="d-inline-block" alt="">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1280px-CSS3_and_HTML5_logos_and_wordmarks.svg.png" class="d-inline-block" alt="">
                    <img src="/img/JavaScript-logo.png" class="d-inline-block" alt="">
                    <img src="/img/sql.png" class="d-inline-block" alt="">
                    <img src="/img/linux.png" class="d-inline-block" alt="">
                    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" class="d-inline-block" alt="">
                    <img src="/img/iconfinder_JQuery_logo_282806.png" class="d-inline-block" alt="">


                </div>
                <div class="carousel-item">
                    <img src="/img/vue.png" class="d-inline-block" alt="">
                    <img src="/img/bootstrap.png" class="d-inline-block" alt="">
                    <img src="/img/laravel.png" class="d-inline-block" alt="">
                    <img src="/img/yii.png" class="d-inline-block" alt="">
                    <img src="/img/codeigniter.svg" class="d-inline-block" alt="">
                    <img src="/img/wordpress.png" class="d-inline-block" alt="">
                    <img src="/img/webpack.png" class="d-inline-block" alt="">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <hr>
        <h2 class="page-title mb-4 mt-4">My Repositories
            <small>GitHub, BitBucket, GitLab</small>
        </h2>
        <div class="text-center mb-4">
            <div class="card d-inline-block" style="width: 18rem;">
                <img src="https://avatars3.githubusercontent.com/u/30719262?s=460&u=db859ad08703d12acb9247534e86466365ad2c4f&v=4" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Frishka (GitHub)</h5>
                    <p class="card-text">Full Stack Web Developer</p>
                    <a href="https://github.com/Frishka" class="btn btn-primary">Go there</a>
                </div>
            </div>
            <div class="card d-inline-block" style="width: 18rem;">
                <img src="https://avatars3.githubusercontent.com/u/30719262?s=460&u=db859ad08703d12acb9247534e86466365ad2c4f&v=4" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Frishka (Bitbucket)</h5>
                    <p class="card-text">Full Stack Web Developer</p>
                    <a href="https://bitbucket.org/Frishka/" class="btn btn-primary">Go there</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>
    #carouselSkills{
        margin:30px auto;
    }
    .carousel-item{
        text-align:center;
    }
    .carousel-item > img:first-child {
        margin-left:0;
    }
    .carousel-item > img {
        width:100px;
        max-height: 100px;
        margin-left:25px;
        margin-top:15px;

    }
    .portfolio-img{
        width:250px;
        margin: 10px auto 25px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.5);
    }
    .about-me-text{
        width: 50%;
        margin: 25px auto;
    }
</style>

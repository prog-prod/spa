<template>
    <header class="header-menu">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#"><brand-component></brand-component></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars text-white fa-2x" aria-hidden="true"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
<!--                    <li class="nav-item " :class="{active: $route.name === 'dev'}"><router-link class="nav-link" :to="{ name: 'dev' }">Dev</router-link></li>-->
                    <li class="nav-item" :class="{active: $route.name === 'home'}"><router-link class="nav-link" :to="{ name: 'home' }">Home</router-link></li>
                    <li class="nav-item" :class="{active: $route.name === 'about'}"><router-link class="nav-link" :to="{ name: 'about' }">About</router-link></li>
                    <li class="nav-item" :class="{active: $route.name === 'portfolio'}"><router-link class="nav-link" :to="{ name: 'portfolio'}">Portfolio</router-link></li>
<!--                    <li class="nav-item" :class="{active: $route.name === 'workspace'}"><router-link class="nav-link" :to="{ name: 'workspace'}">Workspace</router-link></li>-->
                    <li class="nav-item" :class="{active: $route.name === 'contacts'}"><router-link class="nav-link" :to="{ name: 'contacts' }">Contacts</router-link></li>
<!--                    <li class="nav-item"><search-component></search-component></li>-->
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    import BrandComponent from './headerComponents/BrandComponent'
    import SearchComponent from './components/SearchComponent'

    export default {
        name: "header-component",
        components:{
            BrandComponent,
            SearchComponent
        },
        created(){
            console.log(this.$route.name)
        }
    }
</script>

<style scoped>
    .navbar-collapse{
        justify-content: center;
    }
    @media (max-width: 991px ){
        .navbar-nav{
            text-align: center;
        }
        .header-menu ul li{
            margin-right: 0px !important;
        }
    }

    header{
        padding: 10px 10px 40px;
        position: relative;
    }
    header:hover ul li a{
        opacity: 1;
    }
    .header-menu{
        margin: 1px auto;
        font-family: 'AR', sans-serif;
    }

    .header-menu ul li{
        margin-right:1rem;

    }
    .header-menu ul li:last-child{
        margin-right:0
    }
    .header-menu ul li a{
        display:inline-block;
        text-transform:uppercase;
        font-weight: 400;
        color: white;
        font-size: 13px;
        letter-spacing: 1px;
        border-bottom:1px solid transparent;
        transition: all .3s ease-in-out;
        opacity:0.6;
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
    .header-menu ul li a:hover{
       border-bottom-color: #8c8c8c;
    }
    .header-menu ul li.active a{
        opacity:1;
    }
    .nav-link {
        padding: 0.3rem 1rem;
    }
</style>

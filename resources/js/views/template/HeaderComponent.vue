<template>
    <header>
        <brand-component></brand-component>
        <div class="header-menu">
            <ul class="list-inline text-center">
                <li class="list-inline-item" :class="{active: $route.name === 'dev'}"><router-link :to="{ name: 'dev' }">Dev</router-link></li>
                <li class="list-inline-item" :class="{active: $route.name === 'about'}"><router-link :to="{ name: 'about' }">About</router-link></li>
                <li class="list-inline-item" :class="{active: $route.name === 'portfolio'}"><router-link :to="{ name: 'portfolio'}">Portfolio</router-link></li>
                <li class="list-inline-item" :class="{active: $route.name === 'contacts'}"><router-link :to="{ name: 'contacts' }">Contacts</router-link></li>
                <li class="list-inline-item"><search-component></search-component></li>
            </ul>
        </div>
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
        margin-right:16px;

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
    }
    .header-menu ul li a:hover{
       border-bottom-color: #ffffff;
    }
    .header-menu ul li.active a{
        opacity:1;
    }
</style>

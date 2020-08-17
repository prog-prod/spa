<template>
    <a href="/" class="header-brand">
        <img src="/img/logo.png" alt="My brand">
    </a>
</template>

<script>
    export default {
        name: "brand-component"
    }
</script>

<style lang="scss" scoped>
    @media (max-width: 991px ) {
        .header-brand {
            img {
                height: 33px;
                margin: 7px 0px;
            }
        }
    }
    .header-brand{
        position: absolute;
        top:10px;
        left:10px;
    }
</style>

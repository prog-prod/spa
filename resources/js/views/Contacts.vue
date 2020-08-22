<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <page-template>
                    <h1 class="page-title">{{capitalize($route.name)}} <small>Type me a message</small></h1>
                    <hr>
                    <p>
                        You can write to me by E-mail or Telegram if you have a question
                        or you want to order a website or another project.
                    </p>
                    <ul class="list-unstyled">
                        <li>My Email: <a href="mailto:polyvyanyy.andrii@gmail.com">polyvyanyy.andrii@gmail.com</a></li>
                        <li>My Telegram: <a href="https://t.me/prog_prog" target="_blank">ProgProg</a></li>
                    </ul>
                </page-template>
            </div>
        </div>
    </div>
</template>

<script>
    import PageTemplate from "./PageTemplate";

    export default {
        name: "contacts",
        components:{
            PageTemplate
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="main inner cover">
        <div class="container">
            <div class="col-md-12">
                <page-template>
                    <div class="m-5 text-center">
                        <h3>404</h3>
                        <hr>
                        <p class="text-center text-muted">Page Not Found</p>
                    </div>
                </page-template>
            </div>

        </div>
    </div>
</template>

<script>
    import PageTemplate from "./PageTemplate";
    export default {
        name: "not-found-component",
        components:{
            PageTemplate
        }
    }
</script>

<style scoped>

</style>

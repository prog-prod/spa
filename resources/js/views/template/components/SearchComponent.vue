<template>
    <div class="search-icon">
        <template v-if="showInput">
            <input type="text"  v-model="searchModel" placeholder="Search">
            <button type="button" class="btn-btn-default" @click.prevent="showInput = !showInput" >Close</button>
        </template>
        <a href="#" v-else  @click.prevent="showInput = !showInput">
            <img src="/img/search_icon.svg" alt="My brand">
        </a>
    </div>
</template>

<script>
    export default {
        name: "search-component",
        data: function (){
            return {
                searchModel: null,
                showInput: false
            }
        },
        methods:{
            search(){
                console.log()
            }
        }
    }
</script>

<style scoped>
    .search-icon{

    }
</style>

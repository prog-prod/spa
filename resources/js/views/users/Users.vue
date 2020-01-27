<template>
    <div>
        <ul class="list-unstyled">
            <li v-for="user in users">
                <b>User {{user.name}}</b>
                <small>Created At: {{user.created_at}}</small>
                <hr>
            </li>
        </ul>

    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        name: "user",
        props:['id'],
        data: function(){
            return {
                url: this.id ? '/api/user/'+this.id : '/api/users',
                users: null
            }
        },
        methods:{
            toDo: function () {
                this.$router.push('/')
            },
            getUser(){
                axios
                    .get(this.url)
                    .then( response => {
                        console.log(response)
                        this.users = response.data.data;
                        console.log(this.users)
                        this.$forceUpdate()
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }
        },
        created(){
            this.getUser()
        }
    }
</script>

<style scoped>

</style>

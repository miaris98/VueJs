<template>
    <ul>
        <li v-for="user in users" :key="user" @click="remove(user)">{{user}}</li>
    </ul>
    <div>
        <input type="text" ref="UserInput"/>
        <button @click="Add">Add</button>
    </div>
</template>

<script>
export default {
    data() {
        return{
            users: ['Max','Alex','Chu','Yi','Yang'],
        }
    },
    methods:{
        Add(){
            this.users.unshift(this.$refs.UserInput.value);
        },
        remove(user){
            this.users=this.users.filter(usr => usr !== user);
        }
    },
}
</script>

<style scoped>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
li{
    border: 1px solid rgb(202, 168, 168);
    padding: 1rem;
    text-align: center;
}
</style>>


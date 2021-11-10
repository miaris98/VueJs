<template>
    <h2>{{userName}}</h2>
    <h3>{{age}}</h3>
</template>

<script>
import {computed , inject ,onMounted } from 'vue';
export default {
    props:['firstName','lastName'],
    setup(props , context) {
        onMounted(function () {
            console.log('whatever');
        })
        const uName = computed(function() {
            return props.firstName + ' ' + props.lastName ;
        });
        console.log(context);
        const age=inject('userAge');
    
        return{userName:uName , age}
    },
}
</script>
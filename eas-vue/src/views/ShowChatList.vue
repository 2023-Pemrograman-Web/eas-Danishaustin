<script setup>
import { ref } from 'vue';
import axios from 'axios';

const login = async ()=>{
    try{
        const res = await axios.get('http://localhost:3000/api/chats',{
            withCredentials: true
        })
    } catch(e){
        alert(e.message);
    }
}
</script>

<template>
    
</template>
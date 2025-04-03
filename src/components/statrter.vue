<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    const sampleData=ref([])
    const fetchData =async()=>{
        try {
            const res = await axios.get("http://192.168.11.71:8000/todos/");
            if(res.status===200){
                sampleData.value=res.data;
            }
        } catch (error) {
            console.log(error)
        }
    }
    onMounted(()=>{
        fetchData()
    })
</script>

<template>
    <v-card>
        {{ sampleData }}
    </v-card>
</template>

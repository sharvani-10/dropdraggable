<script setup lang = "ts">
import { ref,onMounted } from 'vue'
const data = ref<any>([])
const loading = ref<boolean>(true)
const error = ref<string | null>(null)

const fetchData = async () =>{
    try{
        const res = await fetch('http://192.168.11.71:8080/todos/')
        console.log('response',res);
        if(!res.ok){
            throw new Error("Failed to fetch the data");
        }
        const result = await res.json()
        data.value = result
    }
    catch(err){
        console.log('Error',err);
        error.value = (err as Error).message
    }
    finally{
        loading.value=false
    }
}
onMounted(()=>{
    console.log('unmounted component');
    fetchData()
})
</script>
<template>
    <h3>api calling</h3>
    <h3 v-if = "loading">data is loading</h3>
    <h3 v-else-if = "error">{{ error }}</h3>
    <ul v-else>
        <li v-for = "todo in data">{{ todo }}</li>
    </ul>
</template>


<template>
    <div>
      <button @click="getpost">Load posts</button>
      <h3 v-if="errorMsg">{{ errorMsg }}</h3>
      <div v-for="post in posts" :key="post.id">
        
        <h3>{{ post.id }}. {{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <hr />
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "api",
    data() {
      return {
        posts: [],
        errorMsg:''
      };
    },
    methods: {
      getpost() {
        axios
          .get("http://192.168.11.71:8080/todos/")  
          .then((response) => {
            console.log(response.data);  
            this.posts = response.data;  
          })
          .catch((error) => {
            console.log(error)
            this.errorMsg = 'error'
          });
      },
    },
  };
  </script>
  
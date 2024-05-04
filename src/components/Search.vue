<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyWorld"/> &nbsp;
      <button @click="searchGithubUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Search',
    data() {
        return {
            keyWorld:'',
        }
    },
    methods:{
        searchGithubUser(){
            axios.get(`https://api.github.com/search/users?q=${this.keyWorld}`).then(
                response=>{
                    console.log("请求成功");
                    this.$msgbus.$emit('search', response.data.items)
                },
                error=>{
                    console.log("请求失败", error.message);
                }
            )
        }
    }
}
</script>

<style>

</style>
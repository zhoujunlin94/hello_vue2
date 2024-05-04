<template>
    <div>
        <button @click="getStudents">获取学生信息</button>
        <button @click="getCars">获取汽车信息</button>
    </div>
</template>

<script>
// npm i axios
import axios from 'axios'
export default {
    name: 'App',
    methods:{
        getStudents(){
            // 前端请求后端服务 存在跨域问题  需要代理服务器（服务器之间http请求不存在跨域） 8080域服务不存在的资源，会走代理服务器。
            // axios.get('http://localhost:8080/students').then(
            //     response => {
            //         console.log("/students请求成功了", response.data);
            //     },
            //     error=>{
            //         console.log("/students请求失败了", error.message);
            //     }
            // )

            axios.get('http://localhost:8080/api1/students').then(
                response => {
                    console.log("/students请求成功了", response.data);
                },
                error=>{
                    console.log("/students请求失败了", error.message);
                }
            )
        },
        getCars(){
            axios.get('http://localhost:8080/api2/cars').then(
                response => {
                    console.log("/cars请求成功了", response.data);
                },
                error=>{
                    console.log("/cars请求失败了", error.message);
                }
            )
        }
    }
}
</script>
<style>
</style>
<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age+1 }}</h2>
    <h2>学生年龄2：{{ myAge }}</h2>
    <button @click="updateAge">尝试修改年龄</button>
    <button @click="updateAge2">尝试修改年龄2</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data() {
        return {
            msg: '我是一名学生',
            // data和props均存在的属性会报错  props优先
            /* name: 'zhangsan',
            sex: '男',
            age: 18 */
            // props赋给data
            myAge: this.age
        }
    },
    methods:{
        updateAge(){
            // 能修改props 但是控制台会报错
            this.age = 40
        },
        updateAge2(){
            // 能修改props 但是控制台会报错
            this.myAge++
        }
    },
    // 简单接受：传递过来的数据默认是字符串
    //props: ['name', 'sex', 'age']
    
    // 接受的同时  对数据类型进行限制
    /* props:{
        name: String,
        sex: String,
        age: Number
    } */

    // 接受的同时  校验类型、必传、默认值
    props: {
        name: {
            type : String,   // 类型
            required: true  //  是否必传
        },
        sex: {
            type : String,
            required: true
        },
        age: {
            type : Number,
            default: 99     // 默认值
        }
    }

}
</script>
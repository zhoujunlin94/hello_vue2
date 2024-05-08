<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:red">Count组件的求和为：{{ sum }}</h3>
    <h3>列表中第一个人员的名字是：{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model.trim="name"/>
    <button @click="addPerson(name)">添加</button>
    <button @click="addWang(name)">添加姓王的人</button>
    <ul>
        <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        personList(){
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters["personAbout/firstPersonName"]
        }
    },
    methods:{
        addPerson() {
            if(this.name){
                this.$store.commit('personAbout/ADD_PERSON', {id:nanoid(), name: this.name})
                this.name = ''
            }
        },
        addWang() {
            if(this.name){
                this.$store.dispatch('personAbout/addPersonWang', {id:nanoid(), name: this.name})
                this.name = ''
            }
        }
    },
    mounted(){
        console.log('Person.store=>', this.$store);
    }
}
</script>

<style>

</style>
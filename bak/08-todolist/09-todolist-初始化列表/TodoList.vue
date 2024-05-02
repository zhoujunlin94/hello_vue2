<template>
    <ul class="todo-main">
        <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"/>
    </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: 'TodoList',
    components: {TodoItem},
    data() {
      return {
        todos:[
          {id:"001", title:"抽烟", done:true},
          {id:"002", title:"喝酒", done:true},
          {id:"003", title:"烫头", done:false},
        ]
      }
    },
}
</script>

<style>
    /*list*/
    .todo-main {
      margin-left: 0px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding: 0px;
    }
    .todo-empty {
      height: 40px;
      line-height: 40px;
      border: 1px solid #ddd;
      border-radius: 2px;
      padding-left: 5px;
      margin-top: 10px;
    }
    .todo-enter-active {
      animation: atguigu 0.5s linear;
    }

    .todo-leave-active {
      animation: atguigu 0.5s linear reverse;
    }

</style>
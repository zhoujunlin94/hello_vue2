<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleChange(todo.id)" />
            <span>{{ todo.title }}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name: 'TodoItem',
    props: ['todo', 'doneTodo', 'deleteTodo'],
    methods:{
      handleChange(id){
        this.$msgbus.$emit('doneTodo', id)
      },
      handleDelete(id){
        if(confirm('确定删除吗？')){
          pubsub.publish('deleteTodo', id)
        }
      }
    }
}
</script>

<style scoped>
    /*item*/
    li {
      list-style: none;
      height: 36px;
      line-height: 36px;
      padding: 0 5px;
      border-bottom: 1px solid #ddd;
    }

    li label {
      float: left;
      cursor: pointer;
    }

    li label li input {
      vertical-align: middle;
      margin-right: 6px;
      position: relative;
      top: -1px;
    }

    li button {
      float: right;
      display: none;
      margin-top: 3px;
    }

    li:before {
      content: initial;
    }

    li:last-child {
      border-bottom: none;
    }
    /* 鼠标悬浮样式 */
    li:hover {
      background-color: #ddd;
    }
    li:hover button {
      display: block;
    }
</style>
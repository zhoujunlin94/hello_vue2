<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleChange(todo.id)" />
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input v-show="todo.isEdit" type="text" 
              :value="todo.title" @blur="handleBlur(todo, $event)">
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
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
      },
      handleEdit(todo){
        // 非响应式的  没有get  set
        // todo.isEdit = true
        // console.log(todo);
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit =  true
        } else {
          this.$set(todo, 'isEdit', true)
        }
      },
      handleBlur(todo, event){
        // 失去焦点事件
        todo.isEdit = false
        if(!event.target.value.trim()) return alert('输入不能为空')
        this.$msgbus.$emit('updateTodoTitle', todo.id, event.target.value)
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
<template>
    <!-- <transition name="todo" appear> -->
      <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleChange(todo.id)" />
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input v-show="todo.isEdit" type="text" 
              :value="todo.title" @blur="handleBlur(todo, $event)" ref="inputTitle"/>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
      </li>
    <!-- </transition> -->
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
        // 加定时器的原因是 模板还没有解析（input框还不存在） 就添加了聚焦导致没有效果
        // setTimeout(()=>{
        //   this.$refs.inputTitle.focus()
        // }, 200)

        this.$nextTick(function(){
          // 下一轮dom节点更新之后执行此回调
          // 使用时机：数据的改变导致DOM的更新且需要操作更新后的dom节点
          this.$refs.inputTitle.focus()
        })

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

    @keyframes todo {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0px);
        }
    }

    .todo-enter-active{
        animation: todo 0.5s linear;
    }

    .todo-leave-active{
        animation: todo 0.5s linear reverse;
    }
</style>
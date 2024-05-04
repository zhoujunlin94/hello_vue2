<template>
    <ul class="todo-main">
      <!-- 添加动画 -->
      <transition-group name="todo" appear>
        <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"/>
      </transition-group>
    </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: 'TodoList',
    components: {TodoItem},
    props: ['todos']
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
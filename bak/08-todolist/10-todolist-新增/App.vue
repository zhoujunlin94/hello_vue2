<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- props不仅能传递属性  还能传递方法 -->
                <TodoHeader :addTodo="addTodo"></TodoHeader>
                <TodoList :todos="todos"></TodoList>
                <TodoFooter></TodoFooter>
            </div>
        </div>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
    name: 'App',
    components: { TodoHeader, TodoList, TodoFooter },
    data() {
        return {
            todos: [
                { id: "001", title: "抽烟", done: true },
                { id: "002", title: "喝酒", done: true },
                { id: "003", title: "烫头", done: false },
            ]
        }
    },
    methods: {
        addTodo(todoObj) {
            //console.log("我是App组件，我收到了：", todoObj);
            this.todos.unshift(todoObj)
        }
    }
}
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(103, 159, 180);
    margin-right: 5px;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
const pluginA = {
    install(Vue, x, y, z) {
        console.log(x, y, z);
        console.log("@@@install...", Vue);

        // 定义全局过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 4)
        })

        // 定义全局指令
        Vue.directive('fbind', {
            // 指令与元素绑定时（一上来）
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            // 指令所在模板重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })

        // 定义全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })

        // 给Vue原型上添加方法 （vm/vc都能使用）
        Vue.prototype.hello = () => { alert('你好啊') }

    }
}

export default pluginA
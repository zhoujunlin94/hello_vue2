export const a = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log("你好，我已挂载");
    },
}

export const b = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
}
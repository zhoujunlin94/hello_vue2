<template>
    <div>
        <h2>学校名字：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
export default {
    name: 'School',
    data() {
        return {
            name: '北京大学copycopy',
            address: '北京',
        }
    }
}
</script>
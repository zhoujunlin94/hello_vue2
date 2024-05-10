<template>
  <div>
    <h2>我是Home内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item"  active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item"  active-class="active"  to="/home/message">Message</router-link  >
        </li>
      </ul>
      <!-- 缓存组件 不写inclue属性 里面的组件都会缓存
           include值 《组件名》
      -->
      <keep-alive include="News">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style>

</style>
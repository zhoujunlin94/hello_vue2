<template>
  <div class="row">
    <!-- 展示用户列表 -->
    <div class="card" v-show="info.users.length" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h1 v-show="info.isFirst">欢迎使用！</h1>
    <!-- 展示加载中 -->
    <h1 v-show="info.isLoading">加载中....</h1>
    <!-- 展示错误信息 -->
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
    name: 'List',
    data() {
      return {
        info:{
          isFirst: true,
          isLoading: false,
          errMsg: '',
          users:[]
        }
      }
    },
    methods:{
      updateListData(dataObj){
        // 需要入参传很多参数 传参的时候不知道传的是啥。。。
        // this.isFirst = isFirst
        // this.isLoading = isLoading
        // this.errMsg = errMsg
        // this.users = users
        
        // 不能这样用 data不能赋值
        // this.data = dataObj

        // 可以这样用  但是dataObj中如果有个字段不存在 会破坏info数据的完整性
        // this.info = dataObj

        // 同名属性覆盖  推荐  不破坏原info字段的完整性
        this.info = {...this.info, ...dataObj}

      }
    },
    mounted(){
      this.$msgbus.$on('updateListData', this.updateListData)
    },
    beforeDestroy(){
      this.$msgbus.$off('updateListData')
    }
}
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #b3aeae;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
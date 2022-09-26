<template>
  <div>
    <van-nav-bar title="IOS APPS" placeholder fixed right-text="关于" @click-right="onClickAbout"/>
    <van-notice-bar scrollable left-icon="volume-o" text="如果无法打开，请使用系统自带浏览器重试！"/>
    <div class="list-con">
      <van-cell-group :title="`更新时间：${updateTime}`">
        <van-cell v-for="(it, idx) in catList" :key="idx" @click="onItemClick(it)"
                  :title="it.name" is-link :value="`${it.count}条数据`" size="large"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainPage",
    data() {
      return {
        updateTime: '',
        catList: [],
      };
    },
    mounted() {
      this._showLoading();
      this.$http.get('/index.json').then(res => {
        this._dismissLoading();
        let resData = res.data;
        if (resData) {
          this.updateTime = resData.time;
          this.catList = resData.list;
        }
      }).catch(e => {
        this._dismissLoading();
      })
    },
    methods: {
      onClickAbout(){
        window.location.href = 'https://github.com/cop-dev/ios-apps'
      },
      onItemClick(it) {
        this._routePushQ('CatApps', {cat: it.name});
      },
    },
  }
</script>

<style scoped lang="less">
  .list-con {
  }
</style>

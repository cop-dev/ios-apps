<template>
  <div>
    <van-nav-bar :title="category" placeholder fixed left-arrow @click-left="_routerBack" left-text="返回"/>
    <van-notice-bar scrollable left-icon="volume-o" text="如果无法打开，请使用系统自带浏览器重试！"/>
    <div class="list-con" v-if="appList.length">
      <van-cell-group :title="category">
        <van-cell v-for="(it, idx) in appList" :key="idx" @click="onItemClick(it)"
                  :value="`${it.version}(${it.build})`" :title="it.name" :label="it.bundle_id" is-link size="large"/>
      </van-cell-group>
    </div>
    <div v-else>
      <van-empty description="内容为空"/>
    </div>
  </div>
</template>

<script>
  import {Dialog} from 'vant';

  export default {
    name: "CatApps",
    data() {
      return {
        category: '',
        appList: [],
      };
    },
    mounted() {
      this.category = this.$route.query.cat;
      if (!this.category) {
        this._routerBack()
      } else {
        this.loadAppList()
      }
    },
    methods: {
      onItemClick(it) {
        Dialog.confirm({
          title: '安装IOS应用',
          message: `若没有反应请使用系统自带浏览器打开\n是否安装 ${it.name} ${it.version}?`,
        }).then(() => {
          window.location.href = it.href;
        }).catch(()=>{});
      },
      loadAppList() {
        this._showLoading();
        this.$http.get(`/${this.category}/index.json`).then(res => {
          this._dismissLoading();
          let resData = res.data;
          if (resData) {
            this.appList = resData.apps;
          }
        }).catch(e => {
          this._dismissLoading();
        })
      }
    },
  }
</script>

<style scoped lang="less">

</style>

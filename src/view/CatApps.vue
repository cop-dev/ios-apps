<template>
  <div>
    <van-nav-bar :title="category" placeholder static left-arrow @click-left="_routerBack"/>
    <div class="list-con">
      <van-cell-group :title="category">
        <van-cell v-for="(it, idx) in appList" :key="idx" @click="onItemClick(it)"
                  :value="it.version" :title="it.name" :label="it.bundle_id" is-link size="large"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
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
        this._showToast(`安装 ${it.name} ${it.version}`);
        window.location.href = it.href;
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

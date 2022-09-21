<template>
  <div id="app">
    <van-nav-bar title="Open Schema" fixed placeholder></van-nav-bar>
    <div class="form-con">
      <div>Please Enter Schema:</div>
      <van-field placeholder="Please Enter Schema" class="txt-field" v-model="schemaTxt"></van-field>
      <van-button @click="onJumpClick" type="primary" class="jump-btn">Jump</van-button>
      <van-button @click="onResetClick" type="default" class="jump-btn">Reset</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
        schemaTxt: '',
      };
    },
    methods: {
      onResetClick() {
        this.schemaTxt = '';
      },
      onJumpClick() {
        window.location.href = this.schemaTxt;
      },
    }
  }
</script>


<style scoped lang="less">
  .form-con {
    .jump-btn {
      width: 100%;
      margin: 6px 0;
    }

    .txt-field {
      min-height: 160px;
      margin: 16px 0;
    }

    padding: 16px;
  }

  #app {
    background-color: #f7f7f7;
    height: 100vh;
    overflow-y: hidden;
  }
</style>

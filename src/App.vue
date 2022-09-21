<template>
  <div id="app">
    <!--缓存的页面-->
    <router-view v-slot="{ Component }" v-if="$route.meta.keepAlive">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <!--不缓存的页面-->
    <router-view v-slot="{ Component }" v-if="!$route.meta.keepAlive">
      <component :is="Component"/>
    </router-view>
  </div>
</template>

<script>
  export default {
    name: "app",
  }
</script>


<style scoped lang="less">
  #app {
    background-color: #f7f7f7;
    height: 100vh;
  }
</style>

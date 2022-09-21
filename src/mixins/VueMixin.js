import {Dialog, Toast} from 'vant';

export default {
  methods: {
    _showAlert(msg, confirm) {
      Dialog.alert({
        message: msg,
      }).then(confirm)
    },

    _showConfirm(msg, confirm, cancel) {
      Dialog.confirm({
        message: msg
      }).then(confirm).catch(cancel);
    },

    _routeReplace(toName, params) {
      this.$router.replace({
        name: toName,
        params: params,
      });
    },

    _routeReplaceQ(toName, params) {
      this.$router.replace({
        name: toName,
        query: params,
      });
    },

    _routePush(toName, params) {
      this.$router.push({
        name: toName,
        params: params,
      });
    },

    /**
     * 路由跳转带有query参数
     */
    _routePushQ(toName, params) {
      this.$router.push({
        name: toName,
        query: params,
      });
    },

    /**
     * 显示Toast
     */
    _showToast(msg) {
      Toast(msg);
    },

    /**
     * 路由回退或者历史回退
     */
    _routerBack() {
      this.$router ? this.$router.back() : window.history.back();
    },

    /**
     * 显示Loading
     */
    _showLoading() {
      Toast.loading({
        mask: true,
        duration: 10000,
        loadingType: 'spinner',
        message: '加载中...',
      });
    },

    /**
     * 不显示Loading
     */
    _dismissLoading() {
      Toast.clear();
    },
  },
}

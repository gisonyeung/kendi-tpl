var _ = require('../../util/util');
var header = require('../../component/header/header.vue');
var empty = require('../../component/empty/empty.vue');
var tab = require('./tab/tab.vue');
var vBus = require('../../util/vBus');

exports.init = function (el) {

  new Vue({
    el: el,
    template: __inline('./home.tpl'),
    data: {
      activePanel: 1,
      isLoading: false,
      panels: [
        { key: 1, name: '看点', emptyName: '看点' },
        { key: 2, name: '视频', emptyName: '视频' },
        { key: 3, name: '关注', emptyName: '关注' },
        { key: 4, name: '我的', emptyName: '个人' },
      ]
    },
    components: {
      'v-header': header,
      'v-tab': tab,
      'v-empty': empty,
    },
    created: function () {
      vBus.$on('togglePanel', (key) => {
        this.activePanel = key;
      });
    },
    methods: {
      goback() {
        alert('goback');
      },
    }
  });

}
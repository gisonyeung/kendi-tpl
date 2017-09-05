var _ = require('../../util/util');
var header = require('../../component/header/header.vue');
var tab = require('./tab/tab.vue');
var vBus = require('../../util/vBus');

exports.init = function (el) {

  new Vue({
    el: el,
    template: __inline('./{{ index_page }}.tpl'),
    data: {

    },
    components: {
      'v-header': header,
      'v-tab': tab,
    },
    created: function () {
      // 使用 vBus 进行组件通信
      // vBus.$on('eventName', (data) => {
        
      // });
      // vBus.$emit('eventName', data);
    },
    methods: {

    }
  });

}
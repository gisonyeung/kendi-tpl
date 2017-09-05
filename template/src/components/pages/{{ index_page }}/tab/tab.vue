<template>
  <ul class="SCOPE">
    <li class="active">看点</li>
    <li>视频</li>
    <li>关注</li>
    <li>我的</li>
  </ul>
</template>

<script>
var vBus = require('../../../util/vBus');

export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import "../../../util/tool.scss";

.SCOPE {
  margin: 0;
  padding: 0;
  list-style-type: none;
  font-size: 15px;
  color: #333;
  @extend %clearfix;

  li {
    display: inline-block;
    padding: 10px 0;
    width: 25%;
    float: left;
    text-align: center;
    border-bottom: 2px solid transparent;
    @include transition;

    &.active {
      border-color: $themeColor;
      color: $themeColor;
      background-color: #fff!important;;
    }

    &:hover {
      background-color: rgba(#ccc, 0.2);
    }
  }
}
</style>
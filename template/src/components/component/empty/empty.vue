<template>
  <div class="SCOPE">
    <img src="../../image/empty.png">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    default: '暂无数据'
  }
}
</script>

<style lang="scss">
.SCOPE {
  margin-top: 40px;
  text-align: center;

  p {
    font-size: 15px;
    color: #cdcdcd;
  }
}
</style>
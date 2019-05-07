<template>
  <p>{{title}}页</p>
</template>
<script>
export default {
  name: 'article',
  data () {
    return {
      title: '文章'
    }
  }
}
</script>

<style lang="less" scoped>
p {
  text-align: center;
}
</style>

<template>
  <!--顶部通栏-->
    <na></na>
  <!-- 头部组件 -->
    <header></header>
  <!--  内部容器-->
    <div class="main">
      <RouterView />
    </div>
  <!--  底部组件-->
    <footer></footer>
</template>

<script>

export default {
  name: 'Layout',
  setup () {

  }
}
</script>

<style scoped>

</style>

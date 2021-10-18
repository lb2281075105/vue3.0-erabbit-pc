<template>
  <!--顶部通栏-->
  <AppTopnav />

  <!-- 头部组件 -->
    <header></header>
  <!--  内部容器-->
    <div class="container" style="background-color: red">
    内容容器
      <RouterView />
    </div>
  <!--  底部组件-->
    <footer>内容容器</footer>
</template>

<script>
import AppTopnav from '@/components/app-topnav'

export default {
  name: 'Layout',
  components: {
    AppTopnav
  }
}
</script>

<style scoped>

</style>

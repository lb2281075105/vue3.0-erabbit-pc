<template>
  <!--顶部通栏-->
  <AppTopnav/>

  <!-- 头部组件 -->

  <AppHeader/>
  <AppHeaderSticky />
  <!--  内部容器-->
  <div class="app-body">
    <RouterView/>
  </div>
  <!--  底部组件-->
  <AppFooter/>

</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppHeaderSticky from '@/components/app-header-sticky'
import {useStore} from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  // 获取下分类数据
  setup() {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped>
.app-body {
  min-height: 600px;
}
</style>

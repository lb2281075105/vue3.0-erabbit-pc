<template>
  <!--顶部通栏-->
  <AppTopnav/>

  <!-- 头部组件 -->
  <AppHeader/>
  <!--  内部容器-->
  <div class="app-body">
    内容容器
    <RouterView/>
  </div>
  <!--  底部组件-->
  <AppFooter/>

</template>

<script>
import AppTopnav from '@/components/app-topnav'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import {useStore} from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter
  },
  setup() {
    const store = useStore()
    const profile = {
      id: '',
      avatar: '',
      nickname: '',
      account: '123',
      mobile: '',
      token: 'dd'
    }
    const login = () => {
      console.log('登录')
      store.commit('user/setUser', profile)
    }
    const logout = () => {
      store.commit('user/setUser', {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      })
    }
    return {
      login,
      logout
    }
  }
}
</script>

<style scoped>
.app-body {
  min-height: 600px;
}
</style>

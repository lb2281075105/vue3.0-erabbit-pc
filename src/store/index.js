import { createStore } from 'vuex'
import cart from '@/store/modules/cart'
import category from '@/store/modules/category'
import user from '@/store/modules/user'
import createPersistedstate from 'vuex-persistedstate'
export default createStore({
  state: {
  },
  getters: {
    // vuex的计算属性
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    category,
    user
  },
  plugins: [
    createPersistedstate({
      key: 'erabbit-pc-store',
      paths: ['user', 'cart']
    })
  ]
})

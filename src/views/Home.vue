<template>
   <button @click="goto">关于</button>
  <nav-header></nav-header>
  <nav-main></nav-main>
  <nav-footer></nav-footer>
</template>
<script>
import { defineComponent,ref,reactive,toRefs,computed } from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import NavHeader from '../components/navHeader/NavHeader'
import NavFooter from '../components/navFooter/NavFooter'
import NavMain from '../components/navMain/NavMain'
export default defineComponent({
  name:'Home', 
  // 接收父组件的数据
  props:{
  },
  // 定义子组件
  components:{
    NavHeader,
    NavFooter,
    NavMain

  },
  setup(props,ctx) {
    let router=useRouter()
    let store=useStore()
    let list=computed(()=>{
      return store.state.list
    })
    console.log(router)
    let goto=()=>{
      router.push('about')
    }
    
    return {
      list,
      goto
    
      

    }
  },
})
</script>
<style scoped lang='scss'>

</style>
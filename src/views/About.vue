<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button @click="goback">返回上一页</button>
  </div>
</template>
<script>
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'
export default defineComponent({
   setup(){
     let router=useRouter();
     let goback=()=>{
      //  router.go(-1)
      router.back()
     }
     return {
        goback
     }

   }
})
</script>
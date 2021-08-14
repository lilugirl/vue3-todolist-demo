<template>
   <div>
       <h1>这里是child组件</h1>
       父组件传递过来的数据 {{msg}}
       <button @click="send">传值给父组件</button>
   </div>
</template>
<script>
import { defineComponent,ref,onMounted } from 'vue'

export default defineComponent({
    name:'Child',
    props:{
       msg:{
           // 数据类型校验
           type:String,

           // 是否必传 默认为false
           required:false,
           default:'fu'
        
       } 
    },
    setup(props,ctx) {
        let childMsg=ref('来自子组件的数据')
        let childNum=ref(12)
        let send=()=>{
          ctx.emit('send',childMsg.value)
        }
        onMounted(()=>{
            ctx.emit('send',[childMsg.value,childNum.value])
        })
        return {
            send
          
        }
        
    },
})
</script>

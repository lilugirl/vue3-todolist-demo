<template>
    <div class="container">
       <div>
            已完成 {{isComplete}} /全部 {{list.length}}
       </div>

        <div v-if="isComplete>0">
           <button class="btn" @click="clear">删除已完成</button>
        </div>
    </div>
</template>
<script>
import {defineComponent,ref,computed} from 'vue'
export default defineComponent({
    name:'navFooter',
    props:{
      list:{
          tyep:Array,
          required:true
      }
    },
    setup(props,ctx){
        let isComplete=computed(()=>{
            return props.list.filter(item=>item.complete).length
        })
      
        let clear=()=>{
            console.log('clear')
            ctx.emit('clear',props.list.filter(item=>!item.complete))

        }

        return {
            isComplete,
            clear
        }

    }

})
</script>
<style scoped lang="scss">
.container{
    display:flex;
    align-items: center;
    .btn{
        margin-left:10px;
    }
}
</style>
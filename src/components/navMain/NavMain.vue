<template>
    <div v-if="list.length>0">
      <li class="item" v-for="(item,index) of list" :key="index">{{item.title}}
          <input type="checkbox" v-model="item.complete">
          <button class="del" @click="del(item,index)">删除</button>
          </li> 
      
    </div>
    <div v-else>
      暂无任务
    </div>
</template>
<script>
import {computed, defineComponent,ref} from 'vue'


export default defineComponent({
    name:'navMain',
    props:{
        list:{
            type:Array,
            required:true
        }
    },
    emits:['del'],

    setup(props,ctx){

      
       let del=(item,index)=>{
           console.log(item,index)
           ctx.emit('del',index)
       }

       return {
           del
         
           
       }
    }
})
</script>
<style scoped lang="scss">

.item{
    height:35px;
    line-height: 35px;
    width:150px;
    position: relative;
   

    .del{
    display:none;
    position: absolute;
    top:4px;
    right:0;
     cursor: pointer;
     z-index:9
    }
   &:hover{
       background:#ddd;
       .del{
           display: block;
           
       }
   }

}

</style>
<template>
    <div>
      <li class="item" v-for="(item,index) of list" :key="index">{{item.title}}
          <input type="checkbox" v-model="item.complete">
          <button class="del" @click="del(item,index)">删除</button>
          </li> 
      
    </div>
</template>
<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:'navMain',

    setup(){

       let list=ref([
           {title:'吃饭',complete:false},
           {title:'睡觉',complete:false},
           {title:'打豆豆',complete:false}
       ])

       let del=(item,index)=>{
           console.log(item,index)

       }

       return {
           list,
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
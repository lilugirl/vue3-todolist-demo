<template>
    <div class="container">
       <div>
            已完成 {{isComplete}} /全部 {{all}}
       </div>

        <div v-if="isComplete>0">
           <button class="btn" @click="clear">删除已完成</button>
        </div>
    </div>
</template>
<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
    name:'navFooter',
    setup(){
        let isComplete=ref(3)
        let all=ref(10)
        let clear=()=>{
            console.log('clear')

        }

        return {
            isComplete,
            all,
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
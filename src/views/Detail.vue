<template>
    detail  <child :msg="msg" @send="send"></child>
</template>
<script>
import {defineComponent,ref} from 'vue'
import Child from '../components/child/Child.vue'
export default defineComponent ({
    name:'Detail',
    components:{
        Child
    },
    setup(){
        let msg=ref('10')
        let send=(val)=>{
            console.log('send',val)

        }
        return {
            msg,
            send
        }

    }
})
</script>
<style scoped>

</style>
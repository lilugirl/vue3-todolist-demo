<template>
    <div>
        <button @click="start">开始任务</button>
    </div>
</template>
<script>
import {defineComponent,ref,onMounted} from 'vue'
import {useRouter} from 'vue-router'
export default defineComponent({
    name:'Start',
    setup(){
        let router=useRouter()
        let name=ref('liuyi')
        let num=ref(10)
        let obj=ref({
            msg:'start'
        })

       
        onMounted(()=>{
            // 组件挂在的过程
            // 数据 dom...
            // 发送请求
            // 接收传递过来的参数
            console.log('on mounted')
        })

        console.log('setup')
        let start=()=>{

            // query 传参跟path 或者 name， 会在地址栏中显示，且刷新后还在
            // params传参 跟name，不会在地址栏显示，且刷新后消失
            router.push({
                name:'Home',
                path:'home',
                params:{
                    name:name.value,
                    num:num.value,
                    obj:JSON.stringify(obj.value)
                }
            })
        }
        return {
            start
        }

    }
})
</script>
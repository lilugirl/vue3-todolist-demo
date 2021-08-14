<template>
  <nav-header @add="add"></nav-header>
  <nav-main :list="list" @del="del"></nav-main>
  <nav-footer :list="list" @clear="clear"></nav-footer>
</template>
<script>
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  computed,
  onMounted,
  onUnmounted,
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import NavHeader from "../components/navHeader/NavHeader";
import NavFooter from "../components/navFooter/NavFooter";
import NavMain from "../components/navMain/NavMain";
export default defineComponent({
  name: "Home",
  // 接收父组件的数据
  props: {},
  // 定义子组件
  components: {
    NavHeader,
    NavFooter,
    NavMain,
  },
  setup(props, ctx) {
    let store = useStore();
    let value = ref("");

    let list = computed(() => {
      return store.state.list;
    });

    let add = (val) => {
      value.value = val;

      let flag = true;
      list.value.map((item) => {
        if (item.title === value.value) {
          flag = false;
          alert("任务已存在");
        }
      })
      if (flag) {
        store.commit("addTodo", {
          title: val,
          computed: false,
        });
      }
    };

    let del=(val)=>{
      store.commit('delTodo',val)
    }

    let clear=(val)=>{
      store.commit('clear',val)
    }
    return {
      add,
      value,
      list,
      del,
      clear
    };
  },
});
</script>
<style scoped lang='scss'>
</style>
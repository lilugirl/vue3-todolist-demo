<template>
  {{ num }} {{ name }} {{ obj }}
  <button @click="goto">关于</button>
  <nav-header></nav-header>
  <nav-main></nav-main>
  <nav-footer></nav-footer>
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
    let router = useRouter();
    let route = useRoute();
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });

    let num = ref(null);
    let name = ref("");
    let obj = ref({});

    let goto = () => {
      router.push("about");
    };

    onMounted(() => {
      console.log(route.params);
      num.value = route.params.num * 1;
      name.value = route.params.name;
      obj.value = JSON.parse(route.params.obj);
    });

    onUnmounted(() => {
      // 组件卸载时的声明周期
      // 清除定时器，清除闭包函数
      console.log("on unmounted");
    });

    return {
      list,
      goto,
      num,
      name,
      obj,
    };
  },
});
</script>
<style scoped lang="scss"></style>

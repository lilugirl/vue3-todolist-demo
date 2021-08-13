import { createStore } from "vuex";

export default createStore({
  state: {
    list: [
      { title: "吃饭", complete: false },
      { title: "睡觉", complete: false },
      { title: "打豆豆", complete: true },
    ],
  },
  mutations: {
    addTodo(state,payload){
       state.list.push(payload)
    },
    delTodo(state,payload){
      state.list.splice(payload,1)
    },
    clear(state,payload){
      state.list=payload
    }
  },
  actions: {},
  modules: {},
});

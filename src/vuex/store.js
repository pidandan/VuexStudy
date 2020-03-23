import Vue from "vue";
import Vuex from "vuex";
import * as types from "./mutation-types";
Vue.use(Vuex);

const state = {
  count: 1,
  test: "测试",
  todos: [
    { id: 1, text: "天气美美的", done: true },
    { id: 2, text: "天气坏坏的", done: false }
  ]
};

// 接收参数
const mutations = {
  add(state, parameter) {
    state.count += parameter;
  },
  reduce(state) {
    state.count--;
  },
  // 使用常量替代Mutation事件类型
  [types.UPDATE_COUNT](state, parameter) {
    state.test = parameter;
  }
};

// vuex中getter的使用 实现对数据进行格式化处理
const getters = {
  getTodoById: state => id => {
    return state.todos.find(todo => todo.id === id);
  }
};

// actions的使用
const actions = {
  addAction(context, parameter) {
    // 通过延时来说明异步
    setTimeout(() => {
      context.commit("add", parameter);
    }, 3000);
  },
  reduceAction({ commit }) {
    commit("reduce");
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

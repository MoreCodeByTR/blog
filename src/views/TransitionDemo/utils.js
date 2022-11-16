//混入时同名选项时，以组件内部选项优先
//同名钩子函数，也就是生命周期相关函数会被混入一个数组中，都会被调用
const myMixin = {
  data() {
    return {
      name: "morecode",
      email:"123456@alibaba.com"
    };
  },
  methods: {
    log(state) {
      console.log(`当前状态为${state}`);
    },
  },
};

export default myMixin;

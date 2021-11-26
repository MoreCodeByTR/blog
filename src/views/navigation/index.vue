<template>
  <div>
    <h1 class="large-font">常用链接</h1>
    <a href="https://www.baidu.com" target="_blank">百度一下</a>
  </div>
</template>

<script>
export default {
    components: {

  },
  data() {
    return {
       list: ["曦和", "商户中心", "门店管理", "登录"],
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        welcome: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,  //动态设置其他选项值
      });
    },
  },
};
</script>
<style>
.large-font{
  font-size: 30px;
}

</style>
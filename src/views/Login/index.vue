<template>
  <div>
  <Breadcrumb :items="list" />
  <a-form :form="form" :label-col="{ span: 8 }" :wrapper-col="{ span: 4 }" @submit="handleSubmit">
    <a-form-item label="姓名">
      <a-input
        placeholder="Input your name "
        v-decorator="['name', { rules: [{ required: true, message: '请输入姓名' }] }]"
      />
    </a-form-item>
    <a-form-item label="性别">
      <a-select
        v-decorator="[
          'gender',
          { rules: [{ required: true, message: '请选择性别' }] },
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">
          male
        </a-select-option>
        <a-select-option value="female">
          female
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="欢迎">
      <a-input
        placeholder="Input your name "
        v-decorator="['welcome']"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 8, offset: 8 }">
      <a-button type="primary" html-type="submit">
        提交
      </a-button>
    </a-form-item>
  </a-form>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb"
export default {
    components: {
    Breadcrumb,
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
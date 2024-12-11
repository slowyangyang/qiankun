export default {
  form: {},
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '姓名',
      rules: [{ required: true, message: '请输入名称', trigger: 'blur' }],
      value: '',
      placeholder: '请输入名称',
      style: { width: '100%' },
      slot: 'name',
      clearable: false,
    },
    {
      type: 'select',
      prop: 'hobby',
      label: '爱好',
      rules: [{ required: true, message: '请输入爱好', trigger: 'blur' }],
      value: '',
      placeholder: '请输入爱好',
      options: [],
      style: { width: '100%' },
      slot: 'hobby',
    },
    {
      prop: 'age',
      label: '年龄',
      type: 'select',
      value: [],
      options: [
        { label: '18-25岁', value: 1 },
        { label: '26-35岁', value: 2 },
        { label: '36-45岁', value: 3 },
        { label: '46-55岁', value: 4 },
        { label: '56岁以上', value: 5 },
      ],
      placeholder: '请选择年龄',
      style: { width: '100%' },
      slot: 'age',
      multiple: true,
      filterable: true,
    },
    {
      type: 'radio',
      prop: 'gender',
      label: '性别',
      value: 1,
      options: [
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ],
      style: { width: '100%' },
      slot: 'gender',
      change: val => {
        console.log(val)
      },
    },
    {
      type: 'checkbox',
      prop: 'sports',
      label: '最爱的运动',
      value: [],
      options: [
        { label: '篮球', value: 1 },
        { label: '排球', value: 2 },
      ],
      style: { width: '100%' },
      slot: 'gender1',
      change: val => {
        console.log(val)
      },
    },
    {
      type: 'dateTimePicker',
      pickerType: 'daterange',
      prop: 'saleTime',
      label: '出售时间',
      value: [],
      style: { width: '50%' },
      slot: 'saleTime',
      change: val => {
        console.log(val)
      },
    },
  ],
}

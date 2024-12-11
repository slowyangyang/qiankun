import { reactive } from 'vue'

const config = reactive({
  data: [],
  columns: [
    {
      id: 1,
      prop: 'name',
      label: '合同编号',
    },
    {
      id: 2,
      prop: 'age',
      label: '合同名称',
    },
    {
      id: 3,
      prop: 'address',
      label: '订单编号',
    },
    {
      id: 4,
      prop: 'goods',
      label: '所属项目',
    },
    {
      id: 5,
      prop: 'price',
      label: '所属项目编号',
      minWidth: '150',
      slot: 'price',
      header: 'priceHeader',
      showOverflowTooltip: true,
    },
    {
      id: 6,
      prop: 'operate',
      label: '操作',
      width: 150,
      fixed: 'right',
      slot: 'operate',
    },
  ],
  border: true,
  pagination: {
    pageSize: 10,
    currentPage: 5,
    total: 30,
  },
})
export default config

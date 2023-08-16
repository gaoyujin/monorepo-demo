// export * from './src/types'
// import { withInstall } from '@sp-ui/utils'
// import TableSearch from './src/table-search.vue'

// export const SpTableSearch = withInstall(TableSearch)
// export default SpTableSearch

// export type { TableSearchInstance } from './src/instance'

// src/button/index.js
import withInstall from '../utils/withInstall'
import tableSearch from './src/table-search.vue'

// 导出 install
const TableSearch = withInstall(tableSearch)
// 导出TableSearch组件
export default TableSearch

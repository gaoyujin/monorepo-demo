<template>
  <div>
    <h1>App页面</h1>
    <el-row class="mb-4">
      <SpButton>Default</SpButton>
      <SpButton type="primary">Primary</SpButton>
      <SpButton type="success">Success</SpButton>
      <SpButton type="info">Info</SpButton>
      <SpButton type="warning">Warning</SpButton>
      <SpButton type="danger">Danger</SpButton>
    </el-row>

    <div>
      <SpTableSearch
        :model="refData.searchForm"
        :searchItems="refData.itemsConfig"
        @searchEvent="searchData"
        @resetDataEvent="resetData"
      ></SpTableSearch>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import SpTableSearch from './tableSearch/src/table-search.vue'
import { UiType } from './tableSearch/src/types'

const configType = [
  {
    label: '名称',
    prop: 'fieldName',
    uiType: UiType.Input,
    placeholder: '请输入名称',
  },
  {
    label: '标识',
    prop: 'fieldKey',
    uiType: UiType.Input,
    placeholder: '请输入标识',
  },
  {
    label: '别名',
    prop: 'alias',
    uiType: UiType.Input,
    placeholder: '请输入别名',
  },
]

const refData = reactive({
  searchForm: {
    fieldName: '',
    fieldKey: '',
    alias: '',
    tag: '',
    sensitiveLabel: '',
  },
  itemsConfig: configType,
})

const searchData = (data: any) => {
  console.log('改变的数据：', data)
}

const resetData = (data: any) => {
  console.log('重置的数据：', data)
}
</script>

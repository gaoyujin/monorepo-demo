<script setup lang="ts">
import { ComponentInternalInstance, getCurrentInstance, reactive } from 'vue'
import { LabelPositionTypes, SearchItemValue, SearchLineItem } from './types'
import SearchItem from './table-search-item.vue'

const props = defineProps<{
  mode: Object
  labelPosition?: LabelPositionTypes
  labelWidth: string
  column: number
  rowItems: SearchLineItem[]
  buttonLine: boolean
}>()

const searchFormType: any = props.mode
const refData = reactive({
  searchForm: searchFormType,
})

const instance = getCurrentInstance() as ComponentInternalInstance
const emit = defineEmits(['searchEvent', 'resetDataEvent'])

// 获取控件数据
const getControlVal = () => {
  if (!(instance!.proxy && instance!.proxy.$refs && refData.searchForm)) {
    return
  }

  if (instance!.proxy.$refs) {
    const components = instance!.proxy.$refs
    for (const key in components) {
      const component = components[key]
      if (Array.isArray(component) && component.length > 0) {
        const itemData: SearchItemValue = (component[0] as any).getFormValue()
        if (
          Object.prototype.hasOwnProperty.call(refData.searchForm, itemData.key)
        ) {
          refData.searchForm[itemData.key] = itemData.val
        }
      }
    }
  }
}

// 查询数据
const searchData = () => {
  // 获取控件数据
  getControlVal()
  // 通知父组件
  emit('searchEvent', refData.searchForm)
}

// 重置数据
const resetData = () => {
  if (!(instance!.proxy && instance!.proxy.$refs && refData.searchForm)) {
    // 获取控件数据
    getControlVal()
    // 通知父组件
    emit('resetDataEvent', refData.searchForm)

    return
  }

  if (instance!.proxy.$refs) {
    const components = instance!.proxy.$refs
    for (const key in components) {
      const component = components[key]
      if (Array.isArray(component) && component.length > 0) {
        ;(component[0] as any).resetFormValue()
      }
    }
  }

  // 获取控件数据
  getControlVal()
  // 通知父组件
  emit('resetDataEvent', refData.searchForm)
}
</script>

<template>
  <el-form
    :data="refData.searchForm"
    :label-position="props.labelPosition ? props.labelPosition : 'right'"
    :label-width="props.labelWidth"
  >
    <el-row :key="index" v-for="(item, index) in props.rowItems">
      <el-col
        :key="colKey"
        v-for="(colItem, colKey) in item"
        :span="24 / props.column"
      >
        <el-form-item :label="colItem.label">
          <SearchItem
            :ref="colItem.prop"
            :itemProps="colItem"
            :val="refData.searchForm[colItem.prop]"
          ></SearchItem>
        </el-form-item>
      </el-col>
      <template v-if="index + 1 === props.rowItems.length && !props.buttonLine">
        <el-col :span="24 - item.length * (24 / props.column)">
          <el-button
            type="primary"
            style="margin-left: 20px"
            @click="searchData"
          >
            搜索
          </el-button>
          <el-button @click="resetData">重置</el-button>
        </el-col>
      </template>
    </el-row>

    <el-row v-if="props.buttonLine">
      <el-col :span="24">
        <el-form-item class="el-row--buttons">
          <el-button
            type="primary"
            style="margin-left: 10px"
            @click="searchData"
          >
            搜索
          </el-button>
          <el-button @click="resetData">重置</el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<style scoped>
.el-row--buttons :deep(.el-form-item__content) {
  display: flex;
  justify-content: center;
}
</style>

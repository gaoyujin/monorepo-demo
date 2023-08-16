<script setup lang="ts">
import { ref } from 'vue'
import { SearchItemProps, SearchItemValue, UiType } from './types'

const props = defineProps<{
  val: string
  itemProps: SearchItemProps
}>()

const inputValType: string = props.val
const inputVal = ref(inputValType)

// 获取变更数据
const getFormValue = (): SearchItemValue => {
  return {
    val: inputVal.value,
    key: props.itemProps.prop,
    dataSource: {},
  }
}

// 重置数据
const resetFormValue = () => {
  inputVal.value = ''
}

defineExpose({ getFormValue, resetFormValue })
</script>

<template>
  <div style="width: 100%">
    <el-input
      v-if="
        props.itemProps &&
        props.itemProps.uiType === UiType.Input &&
        props.itemProps.prop
      "
      v-model="inputVal"
      :placeholder="
        props.itemProps.placeholder ? props.itemProps.placeholder : '请输入'
      "
    />
  </div>
</template>

<style></style>

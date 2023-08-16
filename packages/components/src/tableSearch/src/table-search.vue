<template>
  <div class="form-div-class">
    <div v-if="!props.type || props.type === ShowTypes.default">
      <DefaultSearch
        :mode="props.model"
        :labelPosition="props.labelPosition"
        :labelWidth="setLabelWidth"
        :column="refData.lineColumn"
        :rowItems="refData.rowItems"
        :buttonLine="refData.buttonLine"
        @searchEvent="searchData"
        @resetDataEvent="resetData"
      >
      </DefaultSearch>
    </div>
    <div v-else>其他的还未实现</div>
  </div>
</template>

<script name="SpTableSearch" setup lang="ts">
import { computed, onBeforeMount, reactive } from 'vue'
import {
  LabelPositionTypes,
  SearchItemProps,
  SearchLineItem,
  ShowTypes,
} from './types'
import DefaultSearch from './default-search.vue'

const props = defineProps<{
  model: Object
  column?: number
  type?: ShowTypes
  labelPosition?: LabelPositionTypes
  labelWidth?: string
  searchItems: SearchItemProps[]
}>()

const rowItemsType: SearchLineItem[] = []
const refData = reactive({
  searchForm: props.model,
  rowItems: rowItemsType,
  lineColumn: props.column ? props.column : 2,
  buttonLine: true,
})

// 设置表格高度
const setLabelWidth = computed((): string => {
  if (!props.labelWidth) {
    return '100px'
  } else {
    return props.labelWidth
  }
})

// 计算一行显示的内容
const computeLineItems = () => {
  if (!props.column) {
    refData.lineColumn = 2
  }

  if (!refData.rowItems) {
    refData.rowItems = []
  }

  if (!props.searchItems) {
    refData.rowItems = []
  } else {
    let lineItem = []
    for (let i = 0; i < props.searchItems.length; i++) {
      lineItem.push({ ...props.searchItems[i] })
      let lineCount = (i + 1) % (refData.lineColumn as number)
      if (lineCount === 0) {
        refData.rowItems.push({ ...lineItem })
        lineItem = []
      }
    }

    if (lineItem && lineItem.length > 0) {
      refData.rowItems.push({ ...lineItem })
      let len = refData.lineColumn as number
      if (lineItem.length < len) {
        refData.buttonLine = false
      }
    }
  }
}

onBeforeMount(() => {
  console.log(props)
  computeLineItems()
})

const emit = defineEmits(['searchEvent', 'resetDataEvent'])
// 查询数据
const searchData = (searchData: any) => {
  refData.searchForm = searchData
  emit('searchEvent', refData.searchForm)
}

// 查询数据
const resetData = (searchData: any) => {
  refData.searchForm = searchData
  emit('resetDataEvent', refData.searchForm)
}
</script>

<style scoped>
.form-div-class {
  padding-top: 10px;
}
</style>

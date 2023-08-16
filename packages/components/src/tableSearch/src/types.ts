export enum UiType {
  Autocomplete = 'Autocomplete',
  Cascader = 'Cascader',
  Checkbox = 'Checkbox',
  Input = 'Input',
}

export enum ShowTypes {
  default = 'default',
  oneLine = 'oneLine',
  hidden = 'hidden',
}

export enum LabelPositionTypes {
  left = 'left',
  right = 'right',
  top = 'top',
  topBorder = 'topBorder',
}

export type SearchLineItem = Array<SearchItemProps>

export interface SearchItemProps {
  label: string
  prop: string
  uiType: UiType
  placeholder: string
}

export interface SearchItemValue {
  val: string | number | boolean
  key: string
  dataSource: Object
}

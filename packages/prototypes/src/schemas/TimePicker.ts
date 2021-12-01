import { ISchema } from '@formily/vue'

export const CommonTimePickerAPI = {
  editable: {
    type: 'boolean',
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
  },
  clearable: {
    type: 'boolean',
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
  },
  size: {
    default: 'medium',
    type: 'string',
    enum: ['medium', 'small', 'mini', null],
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-component-props': {
      size: 'mini',
      clearable: true,
    },
  },
  placeholder: {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
    'x-component-props': {
      size: 'mini',
      clearable: true,
    },
  },
  'start-placeholder': {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
    'x-component-props': {
      size: 'mini',
      clearable: true,
    },
  },
  'end-placeholder': {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
    'x-component-props': {
      size: 'mini',
      clearable: true,
    },
  },
  'is-range': {
    type: 'boolean',
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
  },
  'arrow-control': {
    type: 'boolean',
    'x-decorator': 'FormItem',
    'x-component': 'Switch',
  },
  align: {
    default: 'left',
    type: 'string',
    enum: ['left', 'center', 'right'],
    'x-decorator': 'FormItem',
    'x-component': 'Select',
    'x-component-props': {
      size: 'mini',
      clearable: true,
    },
  },
  'popper-class': {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
    'x-component-props': {
      size: 'mini',
      clearable: true,
    },
  },
  'picker-options': {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'PreviewText.Input',
  },
  'range-separator': {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
    'x-component-props': {
      size: 'mini',
      clearable: true,
    },
  },
  'default-value': {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'DatePicker',
  },
  'value-format': {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
    'x-component-props': {
      size: 'mini',
      clearable: true,
    },
  },
  'prefix-icon': {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
    'x-component-props': {
      size: 'mini',
      clearable: true,
    },
  },
  'clear-icon': {
    type: 'string',
    'x-decorator': 'FormItem',
    'x-component': 'Input',
    'x-component-props': {
      size: 'mini',
      clearable: true,
    },
  },
}

export const TimePicker: ISchema & { RangePicker?: ISchema } = {
  type: 'object',
  properties: CommonTimePickerAPI,
}

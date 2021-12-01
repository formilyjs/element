import { Checkbox as FormilyCheckbox } from '@formily/element'
import { composeExport } from '@formily/element/esm/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@formily/element-designable'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Checkbox: DnFC<VueComponent<typeof FormilyCheckbox>> =
  composeExport(FormilyCheckbox, {
    Behavior: createBehavior({
      name: 'Checkbox.Group',
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === 'Checkbox.Group',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.Checkbox.Group),
      },
      designerLocales: AllLocales.CheckboxGroup,
    }),
    Resource: createResource({
      icon: 'CheckboxGroupSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'array' || 'Array<string | number>',
            title: 'Checkbox Group',
            'x-decorator': 'FormItem',
            'x-component': 'Checkbox.Group',
            enum: [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
            ],
          },
        },
      ],
    }),
  })

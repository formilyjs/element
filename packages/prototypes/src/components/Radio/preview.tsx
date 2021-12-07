import { Radio as FormilyRadio } from '@formily/element'
import { composeExport } from '@formily/element/esm/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@formily/element-designable'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Radio: DnFC<VueComponent<typeof FormilyRadio>> = composeExport(
  FormilyRadio,
  {
    Behavior: createBehavior({
      name: 'Radio.Group',
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === 'Radio.Group',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.Checkbox.Group),
      },
      designerLocales: AllLocales.CheckboxGroup,
    }),
    Resource: createResource({
      icon: 'RadioGroupSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'string | number',
            title: 'Radio Group',
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            enum: [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
            ],
          },
        },
      ],
    }),
  }
)

import { Cascader as FormilyCascader } from '@formily/element'
import { composeExport } from '@formily/element/esm/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@formily/element-designable'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Cascader: DnFC<VueComponent<typeof FormilyCascader>> =
  composeExport(FormilyCascader, {
    Behavior: createBehavior({
      name: 'Cascader',
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === 'Cascader',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.Cascader),
      },
      designerLocales: AllLocales.Cascader,
    }),
    Resource: createResource({
      icon: 'CascaderSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            title: 'Cascader',
            'x-decorator': 'FormItem',
            'x-component': 'Cascader',
          },
        },
      ],
    }),
  })

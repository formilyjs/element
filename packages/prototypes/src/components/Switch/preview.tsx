import { Switch as ElSwitch } from 'element-ui'
import { composeExport } from '@formily/element/esm/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@formily/element-designable'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Switch: DnFC<VueComponent<typeof ElSwitch>> = composeExport(
  ElSwitch,
  {
    Behavior: createBehavior({
      name: 'Switch',
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === 'Switch',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.Switch),
      },
      designerLocales: AllLocales.Switch,
    }),
    Resource: createResource({
      icon: 'SwitchSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'boolean',
            title: 'Switch',
            'x-decorator': 'FormItem',
            'x-component': 'Switch',
          },
        },
      ],
    }),
  }
)

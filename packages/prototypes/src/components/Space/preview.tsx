import { Space as FormilySpace } from '@formily/element'
import { composeExport } from '@formily/element/esm/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@formily/element-designable'
import { createVoidFieldSchema } from '../Field'
import { withContainer } from '../../common/Container'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Space: DnFC<VueComponent<typeof FormilySpace>> = composeExport(
  withContainer(FormilySpace),
  {
    Behavior: createBehavior({
      name: 'Space',
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === 'Space',
      designerProps: {
        droppable: true,
        inlineChildrenLayout: true,
        propsSchema: createVoidFieldSchema(AllSchemas.Space),
      },
      designerLocales: AllLocales.Space,
    }),
    Resource: createResource({
      icon: 'SpaceSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'Space',
          },
        },
      ],
    }),
  }
)

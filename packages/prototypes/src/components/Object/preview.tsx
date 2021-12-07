import { createBehavior, createResource } from '@designable/core'
import { composeExport } from '@formily/element/esm/__builtins__'
import type { VueComponent } from '@formily/vue'
import { DnFC } from '@formily/element-designable'
import { createFieldSchema } from '../Field'
import { Container } from '../../common/Container'
import { AllLocales } from '../../locales'

export const ObjectContainer: DnFC<VueComponent<typeof Container>> =
  composeExport(Container, {
    Behavior: createBehavior({
      name: 'Object',
      extends: ['Field'],
      selector: (node) => node.props.type === 'object',
      designerProps: {
        droppable: true,
        propsSchema: createFieldSchema(),
      },
      designerLocales: AllLocales.ObjectLocale,
    }),
    Resource: createResource({
      icon: 'ObjectSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'object',
          },
        },
      ],
    }),
  })

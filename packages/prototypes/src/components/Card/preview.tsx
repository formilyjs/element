import { Card as ElCard } from 'element-ui'
import { composeExport } from '@formily/element/esm/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@formily/element-designable'
import { createVoidFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { defineComponent } from 'vue-demi'

export const Card: DnFC<VueComponent<typeof ElCard>> = composeExport(
  defineComponent({
    props: { title: {} },
    setup(props, { slots }) {
      return () => {
        return (
          <ElCard {...props}>
            <span data-content-editable="x-component-props.title" slot="header">
              {props.title}
            </span>
            {slots.default?.()}
          </ElCard>
        )
      }
    },
  }),
  {
    Behavior: createBehavior({
      name: 'Card',
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === 'Card',
      designerProps: {
        droppable: true,
        propsSchema: createVoidFieldSchema(AllSchemas.Card),
      },
      designerLocales: AllLocales.Card,
    }),
    Resource: createResource({
      icon: 'CardSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'void',
            'x-component': 'Card',
            'x-component-props': {
              title: 'Title',
            },
          },
        },
      ],
    }),
  }
)

import { Slider as ElSlider } from 'element-ui'
import { composeExport } from '@formily/element/esm/__builtins__'
import type { VueComponent } from '@formily/vue'
import { createBehavior, createResource } from '@designable/core'
import { DnFC } from '@formily/element-designable'
import { createFieldSchema } from '../Field'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'

export const Slider: DnFC<VueComponent<typeof ElSlider>> = composeExport(
  ElSlider,
  {
    Behavior: createBehavior({
      name: 'Slider',
      extends: ['Field'],
      selector: (node) => node.props['x-component'] === 'Slider',
      designerProps: {
        propsSchema: createFieldSchema(AllSchemas.Slider),
      },
      designerLocales: AllLocales.Slider,
    }),
    Resource: createResource({
      icon: 'SliderSource',
      elements: [
        {
          componentName: 'Field',
          props: {
            type: 'number',
            title: 'Slider',
            'x-decorator': 'FormItem',
            'x-component': 'Slider',
          },
        },
      ],
    }),
  }
)

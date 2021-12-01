import { createSchemaField } from '@formily/vue'
import {
  ColorInput,
  CollapseItem,
  SizeInput,
  DisplayStyleSetter,
  BackgroundStyleSetter,
  BoxShadowStyleSetter,
  FontStyleSetter,
  BoxStyleSetter,
  BorderRadiusStyleSetter,
  BorderStyleSetter,
  ValueInput,
} from './components'
import * as ElementUI from '@formily/element'

const SchemaFields = createSchemaField({
  components: {
    CollapseItem,
    ColorInput,
    ...ElementUI,
    SizeInput,
    DisplayStyleSetter,
    BackgroundStyleSetter,
    BoxShadowStyleSetter,
    FontStyleSetter,
    BoxStyleSetter,
    BorderRadiusStyleSetter,
    BorderStyleSetter,
    ValueInput,
  },
})

export const SchemaField = SchemaFields.SchemaField

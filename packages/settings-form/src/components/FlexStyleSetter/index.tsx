import { Field, useField } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { Radio } from '@formily/element'
import { usePrefix, IconWidget } from '@formily/element-designable'
import { InputItems } from '../InputItems'
import cls from 'classnames'
import './styles.less'
import { defineComponent, unref } from 'vue-demi'

export const FlexStyleSetter = observer(
  defineComponent({
    components: { IconWidget },
    props: [],
    setup() {
      const fieldRef = useField()
      const prefixRef = usePrefix('flex-style-setter')
      return () => {
        const field = unref(fieldRef)
        const prefix = unref(prefixRef)
        return (
          <div class={cls(prefix)}>
            <InputItems vertical>
              <Field
                name="flexDirection"
                basePath={field.address.parent()}
                dataSource={[
                  {
                    infer: 'FlexDirectionRow',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'row',
                  },
                  {
                    infer: 'FlexDirectionColumn',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'column',
                  },
                ]}
                reactions={(field) => {
                  field.decorator[1].title = `Flex Direction : ${
                    field.value || ''
                  }`
                }}
                decorator={[InputItems.Item]}
                component={[
                  Radio.Group,
                  { optionType: 'button', size: 'mini' },
                ]}
              />
              <Field
                name="flexWrap"
                basePath={field.address.parent()}
                dataSource={[
                  {
                    infer: 'FlexNoWrap',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'nowrap',
                  },
                  {
                    infer: 'FlexWrap',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'wrap',
                  },
                ]}
                reactions={(field) => {
                  field.decorator[1].title = `Flex Wrap : ${field.value || ''}`
                }}
                decorator={[InputItems.Item]}
                component={[
                  Radio.Group,
                  { optionType: 'button', size: 'mini' },
                ]}
              />
              <Field
                name="alignContent"
                basePath={field.address.parent()}
                dataSource={[
                  {
                    infer: 'FlexAlignContentCenter',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'center',
                  },
                  {
                    infer: 'FlexAlignContentStart',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'flex-start',
                  },
                  {
                    infer: 'FlexAlignContentEnd',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'flex-end',
                  },
                  {
                    infer: 'FlexAlignContentSpaceAround',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'space-around',
                  },

                  {
                    infer: 'FlexAlignContentSpaceBetween',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'space-between',
                  },
                  {
                    infer: 'FlexAlignContentStretch',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'stretch',
                  },
                ]}
                reactions={(field) => {
                  field.decorator[1].title = `Align Content : ${
                    field.value || ''
                  }`
                }}
                decorator={[InputItems.Item]}
                component={[
                  Radio.Group,
                  { optionType: 'button', size: 'mini' },
                ]}
              />
              <Field
                name="justifyContent"
                basePath={field.address.parent()}
                dataSource={[
                  {
                    infer: 'FlexJustifyCenter',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'center',
                  },
                  {
                    infer: 'FlexJustifyStart',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'flex-start',
                  },
                  {
                    infer: 'FlexJustifyEnd',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'flex-end',
                  },
                  {
                    infer: 'FlexJustifySpaceAround',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'space-around',
                  },
                  {
                    infer: 'FlexJustifySpaceBetween',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'space-between',
                  },
                  {
                    infer: 'FlexJustifySpaceEvenly',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'space-evenly',
                  },
                ]}
                reactions={(field) => {
                  field.decorator[1].title = `Justify Content : ${
                    field.value || ''
                  }`
                }}
                decorator={[InputItems.Item]}
                component={[
                  Radio.Group,
                  { optionType: 'button', size: 'mini' },
                ]}
              />
              <Field
                name="alignItems"
                basePath={field.address.parent()}
                dataSource={[
                  {
                    infer: 'FlexAlignItemsCenter',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'center',
                  },
                  {
                    infer: 'FlexAlignItemsStart',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'flex-start',
                  },
                  {
                    infer: 'FlexAlignItemsEnd',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'flex-end',
                  },

                  {
                    infer: 'FlexAlignItemsStretch',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'stretch',
                  },
                  {
                    infer: 'FlexAlignItemsBaseline',
                    label: ({ option }) => {
                      return <IconWidget props={option} />
                    },
                    value: 'baseline',
                  },
                ]}
                reactions={(field) => {
                  field.decorator[1].title = `Align Items : ${
                    field.value || ''
                  }`
                }}
                decorator={[InputItems.Item]}
                component={[
                  Radio.Group,
                  { optionType: 'button', size: 'mini' },
                ]}
              />
            </InputItems>
          </div>
        )
      }
    },
  })
)

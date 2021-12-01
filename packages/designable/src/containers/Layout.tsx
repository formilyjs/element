import { defineComponent, provide, ref } from '@vue/composition-api'
import { IDesignerLayoutProps } from '../types'
import {
  FragmentComponent as Fragment,
  VueComponent,
  h as CreateElement,
} from '@formily/vue'
import {
  DesignerLayoutSymbol,
  IDesignerLayoutContext,
  useContext,
} from '../context'

export const Layout: VueComponent<IDesignerLayoutProps> = defineComponent({
  props: {
    theme: { type: String, default: 'light' },
    prefixCls: { type: String, default: 'dn-' },
  },
  setup(props: IDesignerLayoutProps, { slots = { default: () => null } }) {
    const layoutRef = useContext<IDesignerLayoutContext>(DesignerLayoutSymbol)

    if (layoutRef.value) {
      return () => CreateElement(Fragment, {}, slots)
    }

    provide(
      DesignerLayoutSymbol,
      ref({
        theme: props.theme,
        prefixCls: props.prefixCls,
      } as IDesignerLayoutProps)
    )

    return () =>
      CreateElement(
        'div',
        {
          class: {
            [`${props.prefixCls}app`]: true,
            [`${props.prefixCls}${props.theme}`]: props.theme,
          },
        },
        slots
      )
  },
})

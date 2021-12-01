import { FragmentComponent as Fragment, VueComponent } from '@formily/vue'
import { useTree, usePrefix, useDesigner, useComponents } from '../../hooks'
import { TreeNodeSymbol, DesignerComponentsSymbol } from '../../context'
import { IDesignerComponents } from '../../types'
import { TreeNode, GlobalRegistry } from '@designable/core'
import { observer } from '@formily/reactive-vue'
import cls from 'classnames'
import './styles.less'
import { defineComponent, provide, ref, toRef } from 'vue-demi'
import { composeExport } from '@formily/element/esm/__builtins__'

export interface IComponentTreeWidgetProps {
  components: IDesignerComponents
}

export interface ITreeNodeWidgetProps {
  node: TreeNode
  // children?: React.ReactChild
}

export const TreeNodeWidgetComponent: VueComponent<ITreeNodeWidgetProps> =
  defineComponent({
    name: 'DnTreeNodeWidget',
    props: {
      node: Object,
    },
    setup(props: ITreeNodeWidgetProps) {
      const designerRef = useDesigner(props.node?.designerProps?.effects)
      const componentsRef = useComponents()

      provide(TreeNodeSymbol, toRef(props, 'node'))

      return () => {
        const node = props.node
        const renderChildren = () => {
          if (node?.designerProps?.selfRenderChildren) return []
          return node?.children?.map((child) => {
            return <TreeNodeWidget props={{ node: child }} key={child.id} />
          })
        }

        // may need to change
        const renderProps = (extendsProps: any = {}) => {
          return {
            ...node.designerProps?.defaultProps,
            ...extendsProps,
            ...node.props,
            ...node.designerProps?.getComponentProps?.(node),
          }
        }

        const renderComponent = () => {
          const componentName = node.componentName
          const Component = componentsRef.value?.[componentName]

          const dataId = {}
          if (Component) {
            if (designerRef.value) {
              dataId[designerRef.value?.props?.nodeIdAttrName] = node.id
            }
            const { style, ...attrs } = renderProps(dataId)
            return (
              <Component attrs={attrs} key={node.id} style={style}>
                {renderChildren()}
              </Component>
            )
          } else {
            if (node?.children?.length) {
              return <Fragment>{renderChildren()}</Fragment>
            }
          }
        }
        if (!node) return null
        if (node.hidden) return null
        return renderComponent()
      }
    },
  })

export const TreeNodeWidget = observer(TreeNodeWidgetComponent)

export const ComponentTreeWidgetComponent: VueComponent<IComponentTreeWidgetProps> =
  observer(
    defineComponent({
      name: 'DnComponentTreeWidget',
      props: { components: [Object] },
      setup(props: IComponentTreeWidgetProps) {
        const treeRef = useTree()
        const prefixRef = usePrefix('component-tree')
        const designerRef = useDesigner()
        const dataId = {}

        GlobalRegistry.registerDesignerBehaviors(props.components)
        provide(DesignerComponentsSymbol, ref(toRef(props, 'components')))
        if (designerRef.value && treeRef.value) {
          dataId[designerRef.value?.props?.nodeIdAttrName] = treeRef.value.id
        }
        return () => {
          return (
            <div class={cls(prefixRef.value)} attrs={{ ...dataId }}>
              <TreeNodeWidget props={{ node: treeRef.value }} />
            </div>
          )
        }
      },
    })
  )

export const ComponentTreeWidget = composeExport(ComponentTreeWidgetComponent, {
  displayName: 'ComponentTreeWidget',
})

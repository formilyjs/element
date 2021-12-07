import { IconWidget } from '../IconWidget'
import { useOperation, usePrefix } from '../../hooks'
import { Button } from 'element-ui'
import { composeExport } from '@formily/element/esm/__builtins__'
import { defineComponent } from 'vue-demi'

// export interface IDeleteProps {
//   node: TreeNode
//   style?: React.CSSProperties
// }

const DeleteComponent = defineComponent({
  props: ['node'],
  setup(props) {
    const operationRef = useOperation()
    const prefixRef = usePrefix('aux-copy')
    return () => {
      if (props.node === props.node.root) return null
      return (
        <Button
          class={prefixRef.value}
          type="primary"
          onClick={() => {
            operationRef.value.removeNodes([props.node])
          }}
        >
          <IconWidget infer="Remove" />
        </Button>
      )
    }
  },
})
export const Delete = composeExport(DeleteComponent, { displayName: 'Delete' })

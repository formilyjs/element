import { TreeNode } from '@designable/core'
import { computed } from 'vue-demi'
import { useDesigner } from './useDesigner'
import { useTreeNode } from './useTreeNode'

export const useNodeIdProps = (node?: TreeNode) => {
  const targetRef = useTreeNode()
  const designerRef = useDesigner()
  return computed(() => {
    return {
      [designerRef.value.props.nodeIdAttrName]: node
        ? node.id
        : targetRef.value.id,
    }
  })
}

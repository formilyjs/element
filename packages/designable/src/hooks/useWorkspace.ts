import { useDesigner } from './useDesigner'
import { WorkspaceSymbol, useContext } from '../context'
import { Workspace } from '@designable/core'
import { ref, computed, Ref } from 'vue-demi'

export const useWorkspace = (id?: string): Ref<Workspace> => {
  const designer = useDesigner()
  const workspaceRef = ref()
  const workspaceId = computed(
    () => id || useContext(WorkspaceSymbol)?.value.id
  )
  if (workspaceId) {
    workspaceRef.value = designer.value.workbench.findWorkspaceById(
      workspaceId.value
    )
  }
  if (window['__DESINGER_WORKSPACE__']) {
    workspaceRef.value = window['__DESINGER_WORKSPACE__']
  }
  workspaceRef.value = designer.value.workbench.currentWorkspace
  return workspaceRef
}

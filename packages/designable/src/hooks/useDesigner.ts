import { Engine } from '@designable/core'
import { DesignerEngineSymbol } from '../context'
import { isFn } from '@designable/shared'
import { inject, onBeforeUnmount, ref, Ref } from 'vue-demi'
export interface IEffects {
  (engine: Engine): void
}

export const useDesigner = (effects?: IEffects): Ref<Engine> => {
  const designer = window['__DESINGER_ENGINE__']
    ? ref(window['__DESINGER_ENGINE__'])
    : inject(DesignerEngineSymbol, ref())

  let unRef = isFn(effects) ? effects(designer.value) : null

  onBeforeUnmount(() => {
    unRef && unRef()
  })
  return designer
}

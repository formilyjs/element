// import React, { Fragment, useRef } from 'react'
import { FragmentComponent as Fragment } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { Button, InputNumber, ButtonGroup } from 'element-ui'
import { CursorType, ScreenType } from '@designable/core'
import {
  useCursor,
  useHistory,
  useScreen,
  usePrefix,
  useWorkbench,
} from '../../hooks'

import { CSSProperties } from '@vue/runtime-dom'

import { IconWidget } from '../IconWidget'
import cls from 'classnames'
import './styles.less'
import { defineComponent, reactive } from 'vue-demi'
import { useStyle } from '../../shared/util'

type DesignerToolsType = 'HISTORY' | 'CURSOR' | 'SCREEN_TYPE'

export type IDesignerToolsWidgetProps = {
  className?: string
  style?: CSSProperties
  use?: DesignerToolsType[]
}

const DesignerToolsWidgetComponent = defineComponent({
  props: {
    className: String,
    use: { type: Array, default: () => ['HISTORY', 'CURSOR', 'SCREEN_TYPE'] },
  },
  setup(props) {
    const screenRef = useScreen()
    const cursorRef = useCursor()
    const workbenchRef = useWorkbench()
    const historyRef = useHistory()
    const sizeRef = reactive<{ width?: any; height?: any }>({
      width: null,
      height: null,
    })
    const prefixRef = usePrefix('designer-tools')
    const style = useStyle()

    return () => {
      const renderResponsiveController = () => {
        if (!props.use.includes('SCREEN_TYPE')) return null
        if (screenRef.value.type !== ScreenType.Responsive) return null
        return (
          <Fragment>
            <InputNumber
              props={{ size: 'mini', controls: false }}
              value={screenRef.value.width}
              style={{ width: '110px', textAlign: 'center' }}
              vOn:change={(value) => {
                sizeRef.width = value
              }}
              vOn:keyup_native={(e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                  screenRef.value.setSize(sizeRef.width, screenRef.value.height)
                }
              }}
            />
            <IconWidget
              props={{ size: '10px' }}
              infer="Close"
              style={{ padding: '0 3px', color: '#999' }}
            />
            <InputNumber
              props={{ size: 'mini', controls: false }}
              value={screenRef.value.height}
              style={{
                width: '110px',
                textAlign: 'center',
                marginRight: '10px',
              }}
              vOn:change={(value) => {
                sizeRef.height = value
              }}
              vOn:keyup_native={(e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                  screenRef.value.setSize(screenRef.value.width, sizeRef.height)
                }
              }}
            />
            {(screenRef.value.width !== '100%' ||
              screenRef.value.height !== '100%') && (
              <Button
                props={{ size: 'small' }}
                style={{ marginRight: '20px' }}
                onClick={() => {
                  screenRef.value.resetSize()
                }}
              >
                <IconWidget infer="Recover" />
              </Button>
            )}
          </Fragment>
        )
      }

      const renderScreenTypeController = () => {
        if (!props.use.includes('SCREEN_TYPE')) return null
        return (
          <ButtonGroup
            size="small"
            style={{ marginRight: '20px' }}
            key="renderScreenTypeController"
          >
            <Button
              props={{
                size: 'small',
                disabled: screenRef.value.type === ScreenType.PC,
              }}
              onClick={() => {
                screenRef.value.setType(ScreenType.PC)
              }}
            >
              <IconWidget infer="PC" />
            </Button>
            <Button
              props={{
                size: 'small',
                disabled: screenRef.value.type === ScreenType.Mobile,
              }}
              onClick={() => {
                screenRef.value.setType(ScreenType.Mobile)
              }}
            >
              <IconWidget infer="Mobile" />
            </Button>
            <Button
              props={{
                size: 'small',
                disabled: screenRef.value.type === ScreenType.Responsive,
              }}
              onClick={() => {
                screenRef.value.setType(ScreenType.Responsive)
              }}
            >
              <IconWidget infer="Responsive" />
            </Button>
          </ButtonGroup>
        )
      }

      const renderMobileController = () => {
        if (!props.use.includes('SCREEN_TYPE')) return null
        if (screenRef.value.type !== ScreenType.Mobile) return
        return (
          <Button
            props={{ size: 'small' }}
            style={{ marginRight: '20px' }}
            onClick={() => {
              screenRef.value.setFlip(!screenRef.value.flip)
            }}
          >
            <IconWidget
              infer="Flip"
              style={{
                transition: 'all .15s ease-in',
                transform: screenRef.value.flip ? 'rotate(-90deg)' : '',
              }}
            />
          </Button>
        )
      }

      const renderHistoryController = () => {
        if (!props.use.includes('HISTORY')) return null
        return (
          <ButtonGroup
            props={{ size: 'small' }}
            style={{ marginRight: '20px' }}
            key="renderHistoryController"
          >
            <Button
              props={{ size: 'small', disabled: !historyRef.value?.allowUndo }}
              onClick={() => {
                historyRef.value.undo()
              }}
            >
              <IconWidget infer="Undo" />
            </Button>
            <Button
              props={{ size: 'small', disabled: !historyRef.value?.allowRedo }}
              onClick={() => {
                historyRef.value.redo()
              }}
            >
              <IconWidget infer="Redo" />
            </Button>
          </ButtonGroup>
        )
      }
      const renderCursorController = () => {
        if (workbenchRef.value.type !== 'DESIGNABLE') return null
        if (!props.use.includes('CURSOR')) return null
        return (
          <ButtonGroup
            size="small"
            style={{ marginRight: '20px' }}
            key="renderCursorController"
          >
            <Button
              props={{
                size: 'small',
                disabled: cursorRef.value.type === CursorType.Move,
              }}
              onClick={() => {
                cursorRef.value.setType(CursorType.Move)
              }}
            >
              <IconWidget infer="Move" />
            </Button>
            <Button
              props={{
                size: 'small',
                disabled: cursorRef.value.type === CursorType.Selection,
              }}
              onClick={() => {
                cursorRef.value.setType(CursorType.Selection)
              }}
            >
              <IconWidget infer="Selection" />
            </Button>
          </ButtonGroup>
        )
      }
      return (
        <div style={style} class={cls(prefixRef.value, props.className)}>
          {renderHistoryController()}
          {renderCursorController()}
          {renderScreenTypeController()}
          {renderMobileController()}
          {renderResponsiveController()}
        </div>
      )
    }
  },
})
export const DesignerToolsWidget = observer(DesignerToolsWidgetComponent)

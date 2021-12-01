import { Engine, IResource, IBehavior } from '@designable/core'
import Vue, { VNode } from 'vue'
import { ComponentRenderProxy } from '@vue/composition-api'

export interface IDesignerLayoutProps {
  prefixCls?: string
  theme?: 'dark' | 'light' | (string & {})
}
export interface IDesignerProps extends IDesignerLayoutProps {
  engine: Engine
}

export interface IDesignerComponents {
  [key: string]: DnFC<any>
}

export interface IDesignerLayoutContext {
  theme?: 'dark' | 'light' | (string & {})
  prefixCls: string
}

export interface IWorkspaceContext {
  id: string
  title?: string
  description?: string
}

export type DnFC<P = {}> = Vue.Component<any, any, any, P> & {
  Resource?: IResource[]
  Behavior?: IBehavior[]
}

export type DnComponent<P = {}> = Vue.Component<any, any, any, P> & {
  Resource?: IResource[]
  Behavior?: IBehavior[]
}

declare global {
  namespace JSX {
    type Element = VNode
    type ElementClass = ComponentRenderProxy
    interface ElementAttributesProperty {
      $props: any // specify the property name to use
    }
    // interface IntrinsicElements {
    //   [elem: string]: any
    // }
  }
}

import { KonvaEventObject } from "konva/lib/Node"
import { MouseEventHandler, TouchEventHandler } from "react"
import { IText, ITouchpoint } from "./DataInterfaces"

export interface IKonvaCanvas {
    projectId?: string 
    imageUrl: string
    orientation: string
    touchpointColor?: string
    touchpoints?: ITouchpoint[]
    touchpointOpacity: number
    onTouchEnd?: (evt: KonvaEventObject<TouchEvent>) => void
  }

  export interface IKonvaImageProps {
    containerWidth: number
    containerHeight: number
    orientation: string
    imageUrl: string
  }

  export interface IButtonComponent {
    text : string
    onClick?: MouseEventHandler<HTMLButtonElement>
    handleTouchEnd: TouchEventHandler<HTMLButtonElement>
  }

  export interface IProjectText {
    orientation: string
    language: boolean
    title: IText
    subtitle: IText    
  }
  

  
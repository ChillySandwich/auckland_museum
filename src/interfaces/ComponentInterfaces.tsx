import { ITouchpoint } from "./DataInterfaces"

export interface IKonvaCanvas {
    stageWidth: number
    stageHeight: number
    imageUrl: string
    orientation: string
    touchpointRadius?: number
    touchpointColor?: string
    touchpoints: ITouchpoint[]
  }

  export interface IImageProps {
    imageUrl: string
    width?: number
    height?: number
    positionX: number
    positionY: number
  }
  

  
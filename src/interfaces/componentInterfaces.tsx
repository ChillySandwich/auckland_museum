import { ITouchpoint } from "./DataInterfaces"


export interface IKonvaCanvas {
    imageUrl: string
    orientation: string
    id: string
    title: string
    subtitle: string
    touchpointRadius?: number
    touchpointColor?: string
    touchpoints: ITouchpoint[]
  }

  export interface IImageProps {
    imageUrl: string
    width: number
    height: number
    positionX: number
    positionY: number
  }
  

  
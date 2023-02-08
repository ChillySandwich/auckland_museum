export interface IProjectDetails {
    id: string
    orientation: string
    title: IText
    subtitle: IText
    imageUrl: string
    touchpointOuterColor?: string
    touchpointOpacity: number
    touchpoints: ITouchpoint[]
}

export interface IText {
    english: string
    teReo: string
}

export interface ITouchpoint {
    id: string
    touchpointRadius: number
    xPosition: number
    yPosition: number
    imageUrl: string
    descriptionHeader: IText
    description: IText
}


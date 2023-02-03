export interface IProjectDetails {
    id: string
    orientation: string
    title: IText
    subtitle: IText
    imageUrl: string
    touchpointRadius?: number
    touchpointColor?: string
    touchpoints: ITouchpoint[]
}

export interface IText {
    english: string
    teReo: string
}

export interface ITouchpoint {
    id: string
    xPosition: number
    yPosition: number
    imageUrl: string
    descriptionHeader: IText
    description: IText
}


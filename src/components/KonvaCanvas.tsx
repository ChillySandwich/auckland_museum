import Konva from 'konva'
import { useEffect, useRef, useState } from 'react'
import { Layer, Stage, Text, Circle } from 'react-konva'
import { IKonvaCanvas } from '../interfaces/ComponentInterfaces'
import KonvaImage from './KonvaImage'

const KonvaCanvas = (props: IKonvaCanvas) => {
    const { orientation, stageWidth, stageHeight, imageUrl, touchpointRadius, touchpointColor, touchpoints,} = props

    return (

                    <Stage width={stageWidth} height={stageHeight}>
                        <Layer>
                            <KonvaImage
                                width={stageWidth}
                                height={stageHeight}
                                imageUrl={imageUrl}
                                positionX={0}
                                positionY={0}
                            />

                            {touchpoints.map((tp, idx) => {
                                const { xPosition, yPosition } = tp

                                return (
                                    <Circle key={idx} x={xPosition} y={yPosition} radius={touchpointRadius} fill={touchpointColor} />
                                )

                            })}
                        </Layer>
                    </Stage>
    )
}
export default KonvaCanvas

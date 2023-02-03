import React from 'react'
import { Layer, Stage, Text, Circle } from 'react-konva'

const KonvaCanvas = (props: IKonvaCanvas) => {
    const { orientation, imageUrl, title, subtitle, touchpointRadius, touchpointColor, touchpoints } = props
    return (
        <>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    <Text x={0} y={orientation === "horizontal" ? 0 : window.innerHeight * 2 / 3} text={title} scale={{ x: window.innerWidth / 500, y: window.innerHeight / 300 }} />
                    <Text x={0} y={orientation === "horizontal" ? 0 : window.innerHeight * 3 / 4} text={subtitle} scale={{ x: 2.5, y: 2.5 }} />
                    <KonvaImage imageUrl={imageUrl} positionX={0} positionY={0} width={window.innerWidth / 2} height={window.innerHeight} />

                    {touchpoints.map((tp, idx) => {
                    const { xPosition, yPosition } = tp
            
                        return (
                            <Circle key={idx} x={xPosition} y={yPosition} radius={touchpointRadius} fill={touchpointColor} />
                        )

                    })}
                </Layer>
            </Stage>
        </>
    )
}
export default KonvaCanvas

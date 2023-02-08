//REACT
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//KONVA
import { Layer, Stage, Circle } from 'react-konva'
import KonvaImage from './KonvaImage'

//INTERFACES
import { IKonvaCanvas } from '../interfaces/ComponentInterfaces'


const KonvaCanvas = (props: IKonvaCanvas) => {
    //PROPS
    const { orientation, projectId, imageUrl, touchpointColor, touchpoints, touchpointOpacity } = props

    //HOOKS
    const navigate = useNavigate()

    //STATE
    const [divDimensions, setDivDimensions] = useState({
        x: 0,
        y: 0
    })

    //REFS
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (divRef) {
            setDivDimensions({ x: divRef?.current?.offsetWidth as number, y: divRef?.current?.offsetHeight as number })
        }
    }, [])

    //HANDLERS
    const handleTouchpointNavigation = (touchPointId: string) => {

        navigate(`/projects/${projectId}/${touchPointId}`)

    }


    return (

        <div
            ref={divRef}
            style={{
                width: orientation === 'horizontal' ? 1920 * 2 / 3 : 1080,
                height: orientation === 'horizontal' ? 1080 : 1920 * 2 / 3,
            }}>
            <Stage width={divDimensions.x} height={divDimensions.y}>
                <Layer>
                    <KonvaImage
                        containerHeight={divDimensions.y} containerWidth={divDimensions.x}
                        imageUrl={imageUrl} orientation={orientation} />

                    {touchpoints?.map((tp, idx) => {
                        const { id, xPosition, yPosition, touchpointRadius } = tp

                        return (
                            <Circle key={idx} x={xPosition} y={yPosition} radius={touchpointRadius} stroke={touchpointColor} opacity={touchpointOpacity}
                                onTouchEnd={() => handleTouchpointNavigation(id)} />
                        )
                    })
                    }

                </Layer>
            </Stage>
        </div>

    )
}
export default KonvaCanvas

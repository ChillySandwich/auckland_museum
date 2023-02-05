import React, { useEffect, useRef, useState } from 'react'
import KonvaCanvas from './../components/KonvaCanvas'
import { useParams } from 'react-router-dom'
import  {projectConfig } from '../config/data'

const Project = () => {
    
    const params = useParams()
    const projectId = params.projectId
    const project = projectConfig.filter((p => p.id === projectId))[0]

    const {imageURL, orientation, touchpoints, touchpointRadius, touchpointOuterColor} = project

    const [ containerDimensions, setContainerDimensions ] = useState({x:0, y:0})



    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (containerRef.current) {

            let width = parseInt(containerRef.current.style.width)
            let height = parseInt(containerRef.current.style.height)
           
            setContainerDimensions({x: width , y: height})
            console.log(containerDimensions)
        }
    }, []);


    return (

        <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid' }}>
            <div style={{ height: window.innerHeight, width: window.innerWidth * 1 / 3}}>
                <div style={{ }}>Octopus </div>
                <div>Subheader</div>


            </div>
            <div ref={containerRef} style={{ height: window.innerHeight, width: window.innerWidth * 2 / 3 }}>

                <KonvaCanvas stageWidth={containerDimensions.x} stageHeight={containerDimensions.y} imageUrl={imageURL} orientation={orientation} touchpoints= {touchpoints} />
            </div>

        </div>
    )
}

export default Project

//REACT
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//CUSTOM HOOKS
import { RedirectPageIfNoInteraction } from '../util/customHooks'

//KONVA
import KonvaCanvas from './../components/KonvaCanvas'

//CONFIG
import { projectConfig } from '../config/data'

//CUSTOM COMPONENTS
import { NavigationButton } from './../components/NavigationButton'
import { LanguageButton } from './../components/LanguageButton'
import ProjectText from './../components/ProjectText'


const Project = () => {
    
    //HOOKS
    const navigate = useNavigate()
    RedirectPageIfNoInteraction()


    const params = useParams()
    const projectId = params.projectId
    const project = projectConfig.filter((p => p.id === projectId))[0]
    const { title, subtitle, imageUrl, orientation, touchpoints, touchpointOuterColor, touchpointOpacity } = project

    //STATE
    const [language, setLanguage] = useState(false)



    //HANDLERS
    const handleLanguageChange = () => {

        setLanguage(!language)

    }

    const handleNavigation = () => {
        navigate("/");
    }


    return (

        <div style={{
            display: 'flex', flexDirection: orientation === 'horizontal' ? 'row' : 'column', justifyContent: 'space-between',
            width: orientation === 'horizontal' ? 1920 : 1080, height: orientation === 'horizontal' ? 1080 : 1920,
        }}>

            <div style={{
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between',
                height: 'auto',
                width: orientation === 'horizontal' ? 1920 * 1 / 3 : 1080,
            }}>
                <div>
                <div style={{padding: '4em 0em 0em 4em'}}>
                    <ProjectText
                        orientation={orientation}
                        language={language}
                        title={title}
                        subtitle={subtitle}
                        headerSize={'5em'}
                        subheaderSize={'3em'}
                    />
                    </div>
                    <div style={{marginLeft: '2.5em'}}>
                    <LanguageButton text={`Switch to ${language ? "Te Reo" : "English"}`} handleTouchEnd={handleLanguageChange} />
                    </div>
                </div>

                {orientation === 'horizontal' &&
                    <div style={{ padding: '3em' }}>
                        <NavigationButton text={"Home"} handleTouchEnd={handleNavigation} />
                    </div>
                }
            </div>


            <KonvaCanvas
                projectId={params.projectId}
                imageUrl={imageUrl}
                orientation={orientation}
                touchpoints={touchpoints}
                touchpointColor={touchpointOuterColor}
                touchpointOpacity={touchpointOpacity}
            />

            {orientation === 'vertical' &&
                <div style={{ padding: '3em' }}>
                    <NavigationButton text={"Home"} handleTouchEnd={handleNavigation} />
                </div>
            }

        </div>
    )
}

export default Project

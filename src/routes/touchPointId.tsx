//REACT
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

//CUSTOM HOOKS
import { RedirectPageIfNoInteraction } from '../util/customHooks'

//CONFIG
import { projectConfig } from '../config/data'

//HELPERS
import { displayTouchPointPage } from '../util/helperFunctions'


const TouchPointId = () => {

    //HOOKS
    const navigate = useNavigate()
    RedirectPageIfNoInteraction()

    const params = useParams()
    const projectId = params.projectId
    const touchPointId = params.touchPointId
    const project = projectConfig.filter((p => p.id === projectId))[0]
    const { orientation, touchpoints } = project

    const touchpoint = touchpoints.filter((tp => tp.id === touchPointId))[0]
    const { imageUrl, descriptionHeader, description } = touchpoint

    //STATE
    const [language, setLanguage] = useState(false)

    //HANDLERS
    const handleLanguageChange = () => {

        setLanguage(!language)
    }

    const handleNavigation = () => {
        navigate(`/projects/${projectId}`)
    };

    return (

        <>
            {
                displayTouchPointPage(orientation, language, descriptionHeader, description, imageUrl, handleNavigation, handleLanguageChange)
            }
        </>
    
    )
}

export default TouchPointId

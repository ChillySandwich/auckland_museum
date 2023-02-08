//REACT
import { Link } from "react-router-dom"

//CONFIG
import  {projectConfig} from '../config/data'

const Root = () => {

    return (
        <>

        <div style={{fontSize: '3em', fontFamily: 'Barlow-Regular', padding: '1.5em', whiteSpace: 'pre-line' }}>

       <p> Click on one of the links below to explore a project.</p> 
       <p> Please note: projects are optimised for a 27" screen, and touch screen events only.</p> 
       
        </div>

       {projectConfig.map((page, idx) => {
            return (
            <div key={idx} style={{fontSize: '4em', fontFamily: 'Barlow-SemiBold', padding: '0 1em 0 1em' }}>
                <Link to={`projects/${page.id}`} >
                    {page.title.english}
                </Link>
            </div>
            )
          })}
        </>
    )

}

export default Root
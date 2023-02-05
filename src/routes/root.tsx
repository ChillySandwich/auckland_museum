import React from "react"
import { Link } from "react-router-dom"
import  {projectConfig } from '../config/data'

const Root = () => {

    return (
        <>
       {projectConfig.map((page, idx) => {
            return (
            <div key={idx}>
                <Link to={`projects/${page.id}`} >
                    {page.title}
                </Link>
            </div>
            )
          })}
        </>
    )

}

export default Root
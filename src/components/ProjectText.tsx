//INTERFACES
import { IProjectText } from '../interfaces/ComponentInterfaces'


const ProjectText = (props: IProjectText) => {
    const { language, title, subtitle, headerSize, subheaderSize } = props
    return (
        <div>
            <div style={{padding: '3em 0 0 3em'}}>
                <div style={{ fontSize: headerSize, fontFamily: 'Barlow-SemiBold' }}>
                    {language ? `${title.english}` : `${title.teReo}`}
                </div>
                <div style={{ fontSize: subheaderSize, fontFamily: 'Barlow-Regular' }}> {language ? `${subtitle.english}` : `${subtitle.teReo}`} </div>
            </div>
        </div>
    )
}

export default ProjectText

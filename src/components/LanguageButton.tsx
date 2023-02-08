
import { IButtonComponent } from '../interfaces/ComponentInterfaces'

export const LanguageButton = (props : IButtonComponent ) => {
    const { text, handleTouchEnd} = props
    return (
        <button style={{backgroundColor: 'white', border: 'medium solid #9bd4e4', color: 'black', textAlign: 'center', display: 'inline-block', fontSize: '1.5em', borderRadius: '2em', width: '10em', height: '3em', marginTop: '1em', fontFamily: 'Barlow SemiBold', marginLeft: '2em'}} onTouchEnd={handleTouchEnd}>
            {text}
        </button>
    )
}

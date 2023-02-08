//COMPONENTS
import { IButtonComponent } from '../interfaces/ComponentInterfaces'

export const NavigationButton = (props : IButtonComponent ) => {
    const { text, onClick, handleTouchEnd} = props
    return (
        <button style={{ backgroundColor: '#9bd4e4', border: 'thick solid #9bd4e4', color: 'black', textAlign: 'center', display: 'inline-block', fontSize: '2.5em', borderRadius: '2em', width: '5em', height: '2.5em', marginTop: '1em', fontFamily: 'Barlow SemiBold' }}
            onClick={onClick} onTouchEnd={handleTouchEnd}>
            {text}
        </button>
    )
}

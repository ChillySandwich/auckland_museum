import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


export const RedirectPageIfNoInteraction = () => {
    const [counter, setCounter] = useState(0)
    const navigate = useNavigate()


    useEffect(() => {

        console.log(counter)

        let timeOut = setTimeout(() => {
            setCounter(counter + 1);
            navigate('/')
        }, 600000);

        const detectTouch = () => {
            console.log('touched')
            clearTimeout(timeOut)
        }

        document.addEventListener("touchstart", detectTouch);


        return () => {
            document.removeEventListener("touchstart", detectTouch)
        }

    }, [counter, navigate],
    )


}
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


export const RedirectPageIfNoInteraction = () => {
    const [counter, setCounter] = useState(0)
    const navigate = useNavigate()


    useEffect(() => {

        let timeOut: string | number | NodeJS.Timeout | undefined;

        const detectTouch = () => {
            console.log('clicked!')
            clearTimeout(timeOut)

            timeOut = setTimeout(() => {
                setCounter(counter + 1);
                navigate('/')
            }, 600000);
        }

        document.addEventListener("touchend", detectTouch);


        return () => {
            document.removeEventListener("touchend", detectTouch)
        }

    }, [counter, navigate],
    )


}
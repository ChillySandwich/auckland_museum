import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


export const RedirectPageIfNoInteraction = () => {
    const [counter, setCounter] = useState(0)
    const navigate = useNavigate()


    useEffect(() => {

        let timeOut: string | number | NodeJS.Timeout | undefined;

        const detectTouch = () => {
            clearTimeout(timeOut)

            timeOut = setTimeout(() => {
                setCounter(counter + 1);
                navigate('/')
            }, 60000);
        }

        document.body.addEventListener("touchend", detectTouch);


        return () => {
            document.body.removeEventListener("touchend", detectTouch)
        }

    }, [],
    )


}
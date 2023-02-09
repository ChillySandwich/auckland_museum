//REACT
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'


function useInterval(callback : any, delay : any) {
    const savedCallback = useRef<any>();
  
    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  /**
   * Above code referenced from: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
   */

export const RedirectPageIfNoInteraction = () => {
    let [count, setCount] = useState(0);
    const navigate = useNavigate();

    useInterval(() => {
            setCount(count + 1);
            if (count === 60) {
                navigate('/')
            }
    }, 1000)


    const detectTouch = () => {
        setCount(0)
    };

    document.addEventListener('touchstart', detectTouch);

};
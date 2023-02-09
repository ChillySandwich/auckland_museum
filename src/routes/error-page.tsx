//REACT
import { Link, useRouteError } from "react-router-dom";


     const ErrorPage = () => {
      const error = useRouteError();
      console.error(error);
    
      return (
        <div id="error-page" style={{fontSize: '4em', fontFamily: 'Barlow-SemiBold', padding: '0 1em 0 1em' }}>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>Touch <Link to={"/"}>here</Link> to go back home</p>
        </div>
      );
    }

    export default ErrorPage
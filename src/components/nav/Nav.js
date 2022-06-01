
import './nav.css'
import { Link } from 'react-router-dom';

export function Nav (props) {


    return (
            <nav>
           {props.currentPage == 'quote' ?  <Link to={'/'}>Home</Link>
            : 
           [<Link to={'/'}>Home</Link>,
           <Link className="quoteOfDay" to={'/quote'}>Quote of the Day</Link>]
            } 
            <Link to={'/login'}>Log In</Link>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/profile'}>Profile</Link>
            </nav>
    )
}
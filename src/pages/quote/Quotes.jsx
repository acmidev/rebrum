import './quotes.css'
import{ Link } from 'react-router-dom' 
import { Nav} from '../../components/nav/Nav'


export  function Quotes () {
    return(
        <div className="main-container">
            <Nav currentPage={'quote'} />
           <div className="wrapper">
                <div className="quote-container">

                </div>
            </div> 
        </div>
    )
}
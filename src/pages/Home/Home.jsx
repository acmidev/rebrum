import './home.css'
import{ Link } from 'react-router-dom' 
import {Nav} from '../../components/nav/Nav'


export  function Home () {
    return(
        <div className="main-container">
            <div className="scroll-porcentage"> </div>
            <Nav currentPage={'home'} />
        </div>
    )
}
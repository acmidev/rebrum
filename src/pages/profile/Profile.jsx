import {ProfileInfo} from '../../components/profileInfo/ProfileInfo'
import {Nav} from '../../components/nav/Nav'
import './profile.css'

export  function Profile () {
    return(
        <div className="main-container">
            <Nav  currentPage={'profile'}/>
            <div className="profile-info-container" style= {{maxWidth : '400px', marginTop : '100px'}}>
                <ProfileInfo />
            </div>
        </div>
    )
}
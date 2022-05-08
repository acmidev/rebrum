import {ProfileInfo} from '../../components/profileInfo/ProfileInfo'
import { Container } from 'react-bootstrap'

export  function Profile () {
    return(
        <Container className="d-flex align-items-center justify-content-center">
            <div className="w-100 mt-100 " style= {{maxWidth : '400px', marginTop : '100px'}}>
                <ProfileInfo />
            </div>
        </Container>
    )
}
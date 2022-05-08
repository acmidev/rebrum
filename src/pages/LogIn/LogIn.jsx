import { LogInForm } from '../../components/logInForm/LogInForm'
import { Container } from 'react-bootstrap'


export function LogIn() {
    return (
        <Container className="d-flex align-items-center justify-content-center">
         <div className="w-100 mt-100 " style= {{maxWidth : '400px', marginTop : '100px'}}>
         <LogInForm />
        </div>
        
        </Container>
    )
}







import React, { useState} from 'react';
import {Card, Button, Alert, Container} from 'react-bootstrap'
import {useAuth} from '../../contexts/AuthContext'
import  { Link, useNavigate } from 'react-router-dom'


export function ProfileInfo() {
    const [error, setError] = useState('')
    const { currentUser, logout } = useAuth()
    const navigate  = useNavigate()


    async function handleLogout() {
        setError('')
        try {
            await logout()
            navigate("/login")
        }catch {
            setError("Failed to Log Out")
        }
    }


    return (
        <Container >
        <Card >
        <Card.Body className="" >
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email: {currentUser.email}</strong>
            <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
        </Card.Body>
        </Card>
        <div className="w-100 mt-2 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div>
        </Container>
    )
}


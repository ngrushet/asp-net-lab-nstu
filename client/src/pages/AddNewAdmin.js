import React, { useContext, useState } from 'react'
import { observer } from "mobx-react-lite";
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate  } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { LOGIN_ROUTE, ADMIN_ADD_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '../index'

const Auth = observer( () => {
    const {user} = useContext(Context)
    const history = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const adminLogin = localStorage.getItem('user').login;
    const adminPassword = localStorage.getItem('user').password;

    const click = async () => {
        try {
            let data = await registration(email, password, adminLogin, adminPassword);
            if (data.register) {
                alert("new user added successfully");
                history.push(ADMIN_ROUTE)
            } else {
                alert("smth went wrong");
            }
        } catch (e) {
            alert(e.response.data.message)
        }   
    }

  return (
    <Container
        className='d-flex justify-content-center align-items-center'
        style={{ height: window.innerHeight - 54 }}>
        <Card style={{ width: 600 }} className='p-5'>
            <h2 className='m-auto'>Регистрация админа</h2>
            <Form className='d-flex flex-column'>
                <Form.Control
                    className='mt-2'
                    placeholder='login'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className='mt-2'
                    placeholder='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type='password'
                />
                <Row className='d-flex justify-constant-between mt-3 pl-3 pr-3'>
                    
                    <Button
                        className='mt-3'
                        variant={ 'outline-success' }
                        onClick={click}
                    >Зарегистрировать</Button>
                </Row>
            </Form>
        </Card>
    </Container>
  )
});

export default Auth

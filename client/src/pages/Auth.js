import React, { useContext, useState } from 'react'
import { observer } from "mobx-react-lite";
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate  } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { LOGIN_ROUTE, ADMIN_ADD_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '../index'

const Auth = observer( () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
    
            } else {
                data = await registration(email, password);
    
            }
            user.setUser(data)
            user.setIsAuth(true);
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
        
    }
  return (
    <Container
        className='d-flex justify-content-center align-items-center'
        style={{ height: window.innerHeight - 54 }}>
        <Card style={{ width: 600 }} className='p-5'>
            <h2 className='m-auto'>{ isLogin ? 'Авторизация' : 'Регистрация'}: </h2>
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
                    {
                        isLogin
                          ? <div>
                                Нет аккаунта? <NavLink to={ ADMIN_ADD_ROUTE }>Зарегистрировать</NavLink>
                            </div>
                          : <div>
                                Есть аккаунт? <NavLink to={ LOGIN_ROUTE }>Войти?</NavLink>
                            </div>
                    }
                    <Button
                        className='mt-3'
                        variant={ 'outline-success' }
                        onClick={click}
                    >
                        {isLogin ? 'Войти' : 'Зарегистрироваться' }</Button>
                </Row>
            </Form>
        </Card>
    </Container>
  )
});

export default Auth

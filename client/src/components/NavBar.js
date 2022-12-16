import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Context } from "../index";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href={SHOP_ROUTE}>OnlineShop</Navbar.Brand>
                {user._isAuth ?
                    <Nav className="al-auto" style={{color: 'blue'}}>
                      <Nav.Link href={ADMIN_ROUTE}>Админ-панель </Nav.Link>
                      <Button variant={"outline-light"} href={LOGIN_ROUTE}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="al-auto" style={{color: 'blue'}}>
                      <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});
export default NavBar;
import React from 'react'
import styled from 'styled-components'
import { IoIosNotifications } from "react-icons/io";
import { FaHome } from 'react-icons/fa';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListBooks from './ListBooks';
import Welcome from './Welcome';
import FormRegister from './FormRegister';
import EditBook from './EditBook';

const Header = styled.header`
    color: #fff;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: space-around;
`

const TitleHeader = styled.h1`
    font-weight: bold;
`

const ItemNav = styled.li`
    display: inline-block;
    margin: 0 1rem;
`

export default function Menu() {
    return (
        <BrowserRouter>
            <Header>
                <TitleHeader>Books FSJ28</TitleHeader>
                <nav>
                    <ul>
                        <ItemNav>
                            <Link to="/" ><FaHome style={{color: "red"}} /></Link>
                        </ItemNav>
                        <ItemNav>
                            <Link to="/books" style={{color: "#fff", textDecoration: "none"}}>Books</Link>
                        </ItemNav>
                        <ItemNav>
                            <Link to="/register" style={{color: "#fff", textDecoration: "none"}}>Register Book</Link>
                        </ItemNav>
                        <ItemNav>Community</ItemNav>
                        <ItemNav>
                            <IoIosNotifications />
                        </ItemNav>
                    </ul>
                </nav>
            </Header>

            {/** declaracion de rutas */}
            {/** declarando un contenedor para todas las rutas de la aplicacion */}
            <Routes>
                {/** creando rutas */}
                <Route path='/' element={<Welcome />} />
                <Route path='/books' element={<ListBooks />} />
                <Route path='/register' element={<FormRegister />} />
                {/** ruta con parametro */}
                <Route path='/book/edit/:id_book' element={<EditBook />} />
            </Routes>
        </BrowserRouter>
    )
}

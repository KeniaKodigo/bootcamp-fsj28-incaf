import React from 'react'
import styled from 'styled-components'
import { IoIosNotifications } from "react-icons/io";
import { FaHome } from 'react-icons/fa';
import { BrowserRouter } from 'react-router-dom';

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
                            <FaHome style={{color: "red"}} />
                        </ItemNav>
                        <ItemNav>Books</ItemNav>
                        <ItemNav>Register Book</ItemNav>
                        <ItemNav>Community</ItemNav>
                        <ItemNav>
                            <IoIosNotifications />
                        </ItemNav>
                    </ul>
                </nav>
            </Header>

            {/** declaracion de rutas */}
        </BrowserRouter>
    )
}

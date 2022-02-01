import React, { useState } from 'react';
import styled from "styled-components";
import RightNav from "./RightNav";

//Animation for the hamburger switching between the menus
const BurgerStyle = styled.div`

    .lines {
        background-color: ${({ open }) => open ? "#ccc" : "#333"};
        
        &:nth-child(1) {
            transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? "translateX(100%)" : "translateX(0)"};
            opacity: ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
        }
    }
`;

export default function Burger() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <BurgerStyle className="burger" open={open} onClick={() => setOpen(!open)}>
                <div className="lines" />
                <div className="lines" />
                <div className="lines" />
            </BurgerStyle>
            <RightNav open={open} />
        </>
    )
}


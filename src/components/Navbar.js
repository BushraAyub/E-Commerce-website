import React,{Component} from 'react'
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import styled from "styled-components";
import {ButtonContainer} from "./Button";
import logo from "../logo.svg";



export default class Navbar extends Component {
    render() {
        return (  
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
            <img src={logo} alt="store" 
            className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
               <Link to="/" className="nav-link">
                   products
               </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                <span className="mr-2">
                <AddShoppingCartIcon/>
                </span>
                my cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
        
    );
        
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:  var(--mainWhite)!important;
    font-sixe: 1.3rem;
    text-transform: capitalize;

}



`


// const ButtonContainer = styled.button`
// text-transform:Capitalize;
// font-size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// color: var(--lightBlue);
// border-radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// cursor: pointer;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease-in-out;
// &:hover{
//     background: var(--lightBlue);
//     color: var(--mainBlue);
// }
// &: focus{
//     outline:none;
// }
// `

/* 


https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */
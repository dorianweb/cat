
import {React} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
background-color:#f6efef;
height: 100vh;
width:150px;
display:flex;
flex-direction column;
justify-content:flex-start;

`;

const Linked= styled(Link)`
width:100%;
height:50px;

text-decoration:none;
color: black;
border-bottom: solid 1px #beb0b0;

display:flex;
justify-content:center;
align-items:center;

font-size:1.2em;
`;

export default function Navbar() {

return(
<Nav>
  <Linked to="/">Home</Linked>
  <Linked to="/companies"> Compangies</Linked>
  <Linked to="/flights"> Vols</Linked>
</Nav>);
}
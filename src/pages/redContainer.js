import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from 'react-router-dom'

export const FormHeader = styled.div`
  background: ${({scrollNav}) => (scrollNav ? '-100%':'red')};
  width: 100%;
  background: #000;
  height: 100px;
  display:inline-block;
`;

export const HeaderLinks = styled(LinkS)`
  text-decoration: none;
  width: 100%;
  color: #fff;
  align-items: center;
  padding: 2%;
  margin:20px;
  position: relative;
  top: 25%;
  font: bold 18px/50px arial;
  :checked &:hover {
    border-bottom: 2px solid red;
    color: red;
    transition: 0.5s;
  }

  &:active {
    border-bottom: 3px solid red;
    color: red;
    transition: 0.5s;
  }

  @media screen and (max-width: 1024px) {
    font: bold 18px/24px arial;
  }
`;

export const HeaderInput = styled.input`
  width: 13%;
  padding: 0.5%;
  align-items: center;
  display: block;
  position:relative;
  overflow: hidden;
  top:30%;
  right:14%;
  color: #000;
 
  background: #fff;
  float: right;

  @media screen and (max-width:960px) {
    display:none;
  }
`;


export const FormBody = styled.div`
   width:100%;
   height:500px;
`

export const FormH1 = styled.div`
  font:bold 25px/24px arial;
  color:red;
  text-align:center;
`;

export const player = styled.div`
   width:100px;
`
 
export const HeaderLink = styled(LinkR)`
  text-decoration: none;
  color: #fff;

  position: relative;
  display:block;
  float:right;
  left:5%;
  top:30%;
  
  font: bold 18px/28px arial;
  &:hover{
    color:red;
    transition: 0.5s;
  }


  @media screen and (max-width:960px) {
    margin:-14px 100px 0px 120px;
    background:blue;
    padding:5px;
    border-radius:10%;
`;
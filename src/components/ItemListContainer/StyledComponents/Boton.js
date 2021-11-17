import styled from "styled-components";
import { Button } from "react-bootstrap";

export const Boton = styled(Button)`
    margin:auto .5rem;
    background-color:#E97333;
    border: 2px solid #B4B242;
    font-family:'Raleway', sans-serif;
    font-weight:900;
    &:hover {
        background-color: #4C5064;
        border: 2px solid #4C5064;
  }
`
import styled from "styled-components";

export const Titulo = styled.h1`
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanho || 12};
    text-align: center;
    width: 100%; 
`
import Styled from "styled-components"
import Input from "../Input"

const SectionSearchContent = Styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
    `
const TitleMainSearch = Styled.h2`
        color: #FFF;
        font-size: 36px;
        text-align: center;
        width: 100%; 
    `
const SubTitleSearch = Styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
    `

function Pesquisa() {

    return (
        <SectionSearchContent>
            <TitleMainSearch>Já sabe por onde começar ?</TitleMainSearch>
            <SubTitleSearch>Encontre seu livro em nossa estante</SubTitleSearch>
            <Input placeholder='Escreva sua próxima leitura' onBlur={evento=>console.log(evento.target.value)}></Input>
        </SectionSearchContent>
    )
}

export default Pesquisa

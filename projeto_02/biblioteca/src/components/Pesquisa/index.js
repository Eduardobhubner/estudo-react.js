import Styled, { styled } from "styled-components"
import Input from "../Input"
import { Titulo } from "../Titulo";
import { useEffect, useState } from "react"
import axios from 'axios';

const SectionSearchContent = Styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`
const SectionShowBooks = styled.section`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
`
const SubTitleSearch = Styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`
const BookContent = Styled.div`
    width: 302px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 644px;
    margin-bottom: 1rem;
`
const BookDescription = styled.p`
    text-align: center;
    font-size: 18px;
    color: #858585;
    margin: 1rem 0;
`
const BookPrice = styled.p`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color:#002f52;
`
const TagsContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin-top: 1rem;
    margin-left: 0.5rem;

`
const Tag = styled.span`
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    color: #9c9c9c;
    padding: 5px 4px;
    background: rgba(197, 197, 197, 0.25);
    border-radius: 4px;
    margin-right: 1rem;
`


function Pesquisa() {

    const [livros, setLivros] = useState([]);



    useEffect(() => {
        async function fetchLivros() {
            const url = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

            try {
                const response = await axios.get(url);
                setLivros(response.data);
            } catch (error) {
                console.error("Erro ao obter os livros:", error);
            }
        }

        fetchLivros();
    }, []);

    return (
        <>
            <SectionSearchContent>
                <Titulo cor={"#f2f2f2"} tamanho={"36px"}>Já sabe por onde começar ?</Titulo>
                <SubTitleSearch>Encontre seu livro em nossa estante</SubTitleSearch>
                <Input placeholder='Escreva sua próxima leitura' onBlur={palavra => {
                    const textoDigitado = palavra.target.value
                    const resultLivro = livros.filter(livro => livro.titulo.includes(textoDigitado))
                    setLivros(resultLivro)
                }}
                ></Input>

            </SectionSearchContent>
            <SectionShowBooks>
                {livros.map(livro => (
                    <BookContent>
                        <img src={livro.imagem} alt={livro.alt} />
                        <Titulo cor={"#000"} tamanho={"16px"}>{livro.titulo}</Titulo>
                        <BookDescription>{livro.autor}</BookDescription>
                        <BookPrice>{livro.preco.toFixed(2)}</BookPrice>
                        <TagsContent>
                            <Tag>{livro.categoria}</Tag>
                        </TagsContent>
                    </BookContent>
                ))}
            </SectionShowBooks>
        </>
    ) 
}

export default Pesquisa

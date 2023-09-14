import Styled from 'styled-components'
const menuOption = ['Home', 'Sobre Nos', 'Serviços', 'Produtos']

const UlMenuContent = Styled.ul`
    display: flex;
`

const LiMenuContent = Styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

function OpcaoMenu(){
    return (
        <UlMenuContent>
            {menuOption.map((option) => (
                <LiMenuContent>{option}</LiMenuContent>
            ))}
        </UlMenuContent>
    )
}

export default OpcaoMenu



import logo from '../../imagens/sacola.svg'
import Styled from 'styled-components'

const LogoContent=  Styled.div`
    display: flex;
    font-size: 30px;
`

const ImgContent = Styled.img` 
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContent>
            <ImgContent src={logo} 
            alt='Logo'
            className='logo-img'
            ></ImgContent>
            <p><strong>Apotec</strong></p>
        </LogoContent>
    )
}

export default Logo 
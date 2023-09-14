// import './estilo.css'
import Logo from '../../components/Logo';
import OpcaoMenu from '../../components/OpcaoMenu';
import Styled from 'styled-components';

const HeaderContainer = Styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcaoMenu />
        </HeaderContainer>
    )
}

export default Header
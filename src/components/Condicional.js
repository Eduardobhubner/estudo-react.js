import {useState} from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
         e.preventDefault()
         setUserEmail(email)
    }

    function limparEmail(){
         setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <label htmlFor="inputEmail"></label>
                <input type="email" id='inputEmail' name='inputEmail' placeholder='Digite o seu e-mail' onChange={(e)=> setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
                { userEmail && (
                    <div>
                        <p>O e-mail do cliente é {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional
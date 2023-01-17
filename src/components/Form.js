import {useState} from 'react'

function Form() {

    const[name, setName] = useState()
    const[password, setPassword] = useState()

    return (
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" placeholder="Digite o seu nome" name="name" id="name" onChange={(e)=> setName(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" placeholder="Digite a sua senha" name="password" id="password" onChange={(e)=> setPassword(e.target.value) }/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(name)
        console.log(password)
    }
}


export default Form
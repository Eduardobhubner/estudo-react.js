import Item from './Item.js'

function List() {

    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Honda" ano_lancamento={1902}></Item>
                <Item marca="Fiat" ano_lancamento={1782}></Item>
                <Item marca="Up" ano_lancamento={1877}></Item>
            </ul>
        </>

    )

}

export default List
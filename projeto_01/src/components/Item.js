import PropTypes from 'prop-types'

function ItemList({ marca, ano_lancamento }) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

ItemList.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number,
}

ItemList.defaultProps = {
    marca : "Faltou determinar a marca do carro",
    ano_lancamento : "Inconsistente",
}

export default ItemList;
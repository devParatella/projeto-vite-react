import PropTypes from 'prop-types';

export function Produto(props) {
  return (
    <h1>{props.nomePagina}</h1>
  );
}

Produto.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};
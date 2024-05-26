import PropTypes from 'prop-types';

export function Missao(props) {
  return (
    <h1>{props.nomePagina}</h1>
  );
}

Missao.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};
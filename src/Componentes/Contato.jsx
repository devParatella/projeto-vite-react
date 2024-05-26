import PropTypes from 'prop-types';

export function Contato(props) {
  return (
    <h1>{props.nomePagina}</h1>
  );
}

Contato.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};


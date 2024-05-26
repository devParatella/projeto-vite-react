import PropTypes from 'prop-types';

export function Historia(props) {
  return (
    <h1>{props.nomePagina}</h1>
  );
}

Historia.propTypes = {
  nomePagina: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';

export const SearchFilter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      placeholder="Search contacts by name"
    />
  );
};

SearchFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

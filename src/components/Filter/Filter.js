import { FilterText } from './Filter.styled';

export const Filter = ({ onSetFilter, currentFilter }) => {
  return (
    <>
      <FilterText>Find contact by name</FilterText>
      <input
        type="text"
        name="search"
        placeholder="Type name"
        value={currentFilter}
        onChange={evt => onSetFilter(evt.target.value)}
      />
    </>
  );
};

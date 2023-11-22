import { FC, useContext } from 'react';
import Select, { ActionMeta } from 'react-select';
import makeAnimated from 'react-select/animated';
import { CompaniesContext } from '../../pages/Main';
import { companiesData } from '../../data';
import './style.sass';

const companies = companiesData.map(item => {return {value: item.id, label: item.name}});

const Multiselect: FC = () => {
  const animatedComponents = makeAnimated();

  const { selectedValues, setSelectedValues } = useContext(CompaniesContext);

  const handleChange = (option: Option[], actionMeta: ActionMeta<Option>) => {
    setSelectedValues(option);
  }

  return (
    <Select
      isMulti
      isSearchable
      name="companies"
      options={companies}
      closeMenuOnSelect={false}
      placeholder='Выберите компании для сравнения'
      components={animatedComponents}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={handleChange}
    />
  )
};

export default Multiselect;
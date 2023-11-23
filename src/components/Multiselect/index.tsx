import { FC, useContext } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { CompaniesContext, ICompany } from '../../pages/Main';
import { companiesData } from '../../data';
import './style.sass';

const companies = companiesData.map(item => {return {value: item.id, label: item.name}});

const Multiselect: FC = () => {
  const animatedComponents = makeAnimated();

  const { setSelectedValues } = useContext(CompaniesContext);

  const handleChange = (option: ICompany[]) => {
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      onChange={handleChange}
    />
  )
};

export default Multiselect;
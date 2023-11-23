import{ FC, SetStateAction, createContext, useEffect, useState, Dispatch } from 'react';
import Multiselect from '../../components/Multiselect';
import './style.sass';
import { Button } from '../../components/Button';
import CompanyBlock from '../../components/CompanyBlock';
import { CompanyProps } from '../../store/types';
import { companiesData } from '../../data';

export interface ICompany {
  value: number;
  company: {[key: string]: string | number | []};
}

type CompanyContextType = {
  selectedValues: ICompany[];
  setSelectedValues: Dispatch<SetStateAction<ICompany[]>>;
}

export const CompaniesContext = createContext<CompanyContextType>({
	selectedValues: [],
	setSelectedValues: () => {},
});


const Main: FC  = () => {
  const [selectedValues, setSelectedValues] = useState<ICompany[]>([]);
	const companiesContextValue = { selectedValues, setSelectedValues };
  const [ companiesList, setCompaniesList ] = useState<CompanyProps[]>([]);
  const [ func, setFunc ] = useState('');

  useEffect(() => {
    const companies: CompanyProps[] = [];
    if(selectedValues.length > 0) {
      selectedValues.forEach(el => {
        const elem: CompanyProps = companiesData.filter(item => item.id === el.value)[0];
        companies.push(elem)
      })
      setCompaniesList(companies)
    }
  }, [selectedValues])


  return (
    <CompaniesContext.Provider value={companiesContextValue}>
      <div className='wrap'>
        <Multiselect />
        {
          selectedValues.length > 0 && (
            <div className='buttons-container'>
              <Button onClick={() => setFunc('revenue')}>
                Сравнить прибыль
              </Button>
              <Button onClick={() => setFunc('netRevenue')}>
                Сравнить чистую прибыль
              </Button>
            </div>
          )
        }
        {
          companiesList.map(val => (
            <CompanyBlock item={val} property={func} key={val.id}/>
          ))
        }
      </div>
    </CompaniesContext.Provider>
  )
}

export default Main;
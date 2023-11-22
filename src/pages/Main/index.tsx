import { FC, createContext, useEffect, useState } from 'react';
import Multiselect from '../../components/Multiselect';
import './style.sass';
import { Button } from '../../components/Button';
import CompanyBlock from '../../components/CompanyBlock';
import { CompanyProps } from '../../store/types';
import { companiesData } from '../../data';

export const CompaniesContext = createContext({
	selectedValues: [],
	setSelectedValues: (val: {[string]: any}[]) => { },
});


const Main: FC  = () => {
  const [selectedValues, setSelectedValues] = useState<unknown[]>([]);
	const companiesContextValue = { selectedValues, setSelectedValues };
  const [ companiesList, setCompaniesList ] = useState<CompanyProps[]>([]);
  const [ func, setFunc ] = useState('');
  console.log('func', func)

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
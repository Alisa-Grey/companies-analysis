import {FC, useEffect, useState} from 'react';
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, YAxis, Legend } from 'recharts';
import { companiesData } from '../../data';
import { CompanyProps } from '../../store/types';

interface CompanyBlockProps {
  item: CompanyProps;
  property?: string;
}

const Block = styled.div`
  width: 90vw;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  border: 1px solid grey;
`

const Title = styled.p`
  font-size: 28px;
  font-weight: bolder;
  line-height: 1.2;
`

const CompanyBlock: FC<CompanyBlockProps> = ({item, property}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if(typeof property!== 'undefined' && property==='revenue') {
      setName('Прибыль')
    } else {
      setName('Чистая прибыль')
    }
  })


  return (
    <Block  id={item.id}>
      <Title>{item.name}</Title>
      {
        typeof property!== 'undefined' && property.length > 0 && (
          <LineChart width={400} height={400} data={item[property]}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" name={name}/>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis dataKey="value"/>
            <Tooltip />
            <Legend />
          </LineChart>
        )
      }
    </Block>
  )
};

export default CompanyBlock;
import React, { useMemo } from 'react';
import { Container, Label, Balance } from './styles';

export default function BalanceItem({ data }){

  const labelName = useMemo(() => {
    if(data.tag === 'saldo'){
      return{
        label: 'Saldo atual',
        color: '568BD6'
      }
    }else if(data.tag === 'receita'){
      return{
        label: 'Entradas de hoje',
        color: '53CBB2'
      } 
    }else{
      return{
        label: 'Saidas de hoje',
        color: 'E45F84',
      }
    }
    
  }, [data])

  return(
    <Container bg={labelName.color}>
      <Label>{labelName.label}</Label>
      <Balance>R$ {data.saldo},00</Balance>
    </Container>
  )
}
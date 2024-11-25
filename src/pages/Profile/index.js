import React, { useContext } from 'react';
import {Container, Message, Name, NewLink, NewText, LogoutButton, LogoutText
 } from './styles'

import Header from '../../components/Header';

import { AuthContext } from '../../contexts/auth';

import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components';

export default function Profile(){
  const { user, signOut } = useContext(AuthContext);
  const navigation = useNavigation();

  //Titulo Sair
  return(
    <Container>
      <Header title="Sair"/>
   
      <Message style={{ marginBottom: 35, color:'#fff'} }>
      Pretende sair? Clique em Sair para confirmar.
      </Message>

      {/* <Name numberOfLines={1} >
        {user && user.name}
      </Name>*/}
     
      <LogoutButton onPress={ () => signOut() }>
        <LogoutText >Sair</LogoutText>
      </LogoutButton>
    </Container>
  )
}
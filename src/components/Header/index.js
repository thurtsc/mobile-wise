import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, ButtonMenu} from './styles';

export default function Header({ title }){
  const navigation = useNavigation();

  //Menu    
  return(
    <Container>
      <ButtonMenu onPress={ () => navigation.openDrawer() }>
        <Icon name="menu" size={35} color="#D9D9D9" />
      </ButtonMenu>

      { title && (
        <Title>
          {title}
        </Title>
      )}
    </Container>
  )
}
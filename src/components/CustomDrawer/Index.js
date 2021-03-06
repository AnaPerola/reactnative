import React from 'react';
import {Title, Container, ContainerImage, AvatarImage, Caption, ContainerSection, ContainerHearder} from '../Styles/Styles_Drawer/Styles_Drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {DrawerItem,DrawerContentScrollView} from '@react-navigation/drawer';

import Avatar from './../../assets/avatar.png';

export default function CustomDrawer(props){
  return (
        <DrawerContentScrollView {...props}>
            <Container  icon={() => (
                <MaterialCommunityIcons name="reorder-horizontal" color={'#ccc'}size={100} 
                style={{ marginTop:100}}/>)}
                onPress={()=>{}}>  
                <ContainerImage>
                    <AvatarImage source={Avatar}/>
                </ContainerImage>
                
                    <Title>Ana Pérola</Title>
                    <Caption>anaperolinha@hotmail.com</Caption>

                    <ContainerSection>
                    <DrawerItem icon={({color,size}) => (
                        <MaterialCommunityIcons name="account-outline" color={color}size={size}/>)}
                        label="Perfil" onPress={() => {}} />
                    <DrawerItem icon={({color,size}) => (
                        <MaterialCommunityIcons name="tune" color={color} size={size}/>)}
                        label="Configurações"onPress={() => {}}/>
                    <DrawerItem icon={({color,size}) => (
                        <MaterialCommunityIcons name="account-clock-outline" color={color} size={size}/>)}
                        label="Recentes"onPress={() => {}}/>
                    </ContainerSection>
            </Container>
        </DrawerContentScrollView>
  );
}


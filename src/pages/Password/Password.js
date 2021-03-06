import React , {useState}from 'react';
import Alert from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, KeyboardAvoidingView, ImageProfile, TextInput, SubTitle, Title, 
    Button, TitleButton, Form} from '../../components/Styles/Styles_Password/Styles_Password';

import user from './../../assets/user.png';

export default function Password(){
    
    function showAlert(){
        Alert.alert(
            "Atenção", "Verifique sua caixa de e-mails",
            [
            {text: "OK", onPress:() => console.log("OK Pressed")},
            ]
        )
    }

    return (
        <LinearGradient colors={['#820606','#280101']}
            style={{flex:1, justifyContent: 'center', alignItems:'center', width:400 }}>
                <Container>
                    <KeyboardAvoidingView behavior='padding' >
                    <ImageProfile source={user}/>
                    <Title>Enviaremos um e-mail com mais informações para {"\n"}
                        Redefinir sua senha</Title>
                    <Form>
                        <SubTitle>Digite o e-mail cadastrado: </SubTitle>
                        <TextInput type="text"
                        placeholder="email@example.com"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        name="email"
                        autoCorrect={false}
                        leftIcon={<Icon name="envelope"/>}></TextInput>
                        <Button  onPress={showAlert}>
                            <TitleButton>ENVIAR</TitleButton>
                        </Button>
                    </Form>
                    </KeyboardAvoidingView>
                </Container>
        </LinearGradient>
    )
}


import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Feature } from '@paralleldrive/react-feature-toggles';
import FormularioInfoPessoal from '../pages/NovoCadastro/formularioInfoPessoal';
import FormularioInfoProfissional from '../pages/NovoCadastro/formularioInfoProfissional';
import NovoFormularioInfoProfissional from '../pages/NovoCadastro/novoFormularioInfoProfissional';
import FormularioSenha from '../pages/NovoCadastro/formularioSenha';
import { FormProvider } from '../context/FormContext';
import rotas from '../constantes/rotas';
import features from '../constantes/features';

const CadastroStack = createStackNavigator();

function FormularioProfissional(props) {
  return (
    <Feature
      name={features.EDICAO_DE_INFORMACOES_PROFISSIONAIS}
      activeComponent={() => <NovoFormularioInfoProfissional {...props} />}
      inactiveComponent={() => <FormularioInfoProfissional {...props} />}
    />
  );
}

export default function RotasCadastro() {
  const navigation = useNavigation();

  const options = {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0
    },
    headerTintColor: 'rgba(0, 0, 0, 0.87)',
    headerTitleAlign: 'center',
    headerTitle: 'Cadastro',
    headerLeft: () => (
      <TouchableOpacity
        style={{
          marginHorizontal: 19
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-left" size={28} color="#304FFE" />
      </TouchableOpacity>
    )
  };

  return (
    <FormProvider>
      <CadastroStack.Navigator>
        <CadastroStack.Screen
          name={rotas.FORMULARIO_PESSOAL}
          component={FormularioInfoPessoal}
          options={options}
        />
        <CadastroStack.Screen
          name={rotas.FORMULARIO_PROFISSIONAL}
          component={FormularioProfissional}
          initialParams={{ tela_anterior: rotas.FORMULARIO_PESSOAL }}
          options={options}
        />
        <CadastroStack.Screen
          name={rotas.FORMULARIO_SENHA}
          component={FormularioSenha}
          options={options}
        />
      </CadastroStack.Navigator>
    </FormProvider>
  );
}

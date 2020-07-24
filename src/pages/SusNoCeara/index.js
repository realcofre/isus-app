import React, { useLayoutEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { TextoSobreSUS, TextoSobreSESA, TextoSobreESP } from './textos';

export default function SusNoCearaScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#4CAF50',
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: '#FFF',
      headerTitleAlign: 'center',
      headerTitle: 'iSUS no Ceará',
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginHorizontal: 19
          }}
          onPress={() => {
            navigation.navigate('Buscar');
          }}
        >
          <Icon name="magnify" size={28} color="#FFF" />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginHorizontal: 19
          }}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <Icon name="menu" size={28} color="#FFF" />
        </TouchableOpacity>
      )
    });
  });

  return (
    <ScrollView style={{ backgroundColor: '#ffffff', flex: 1, padding: 15 }}>
      <Text
        style={{
          letterSpacing: 0.25,
          fontSize: 14,
          lineHeight: 20,
          color: '#828282',
          marginBottom: 18
        }}
      >
      A Escola de Saúde Pública do Ceará – ESP/CE, é uma
       entidade da Administração Indireta Estadual, de natureza
       autárquica, vinculada a Secretaria da Saúde do Ceará
      </Text>

      <List.Accordion titleStyle={{ color: 'black' }} title="Sobre o SUS">
        <List.Item
          titleNumberOfLines={80}
          title={<TextoSobreSUS />}
        />
      </List.Accordion>
      <List.Accordion titleStyle={{ color: 'black' }} title="O que é a SESA">
        <List.Item
          titleNumberOfLines={80}
          title={<TextoSobreSESA />}
        />
      </List.Accordion>
      <List.Accordion titleStyle={{ color: 'black' }} title="O que é a ESP">
        <List.Item
          titleNumberOfLines={80}
          title={<TextoSobreESP />}
        />
      </List.Accordion>
    </ScrollView>
  );
}

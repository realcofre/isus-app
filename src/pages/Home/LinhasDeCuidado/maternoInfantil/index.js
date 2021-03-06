import React, { useLayoutEffect } from 'react';
import { TouchableOpacity, Linking, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { List, Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSvgMaterno from '../../../../assets/icons/linhasDeCuidado/maternoInfantilBanner.svg';
import {
  ScrollView, Texto, Titulo, Container, SvgView
} from './styles';

export default function MaternoInfantil() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#9C27B0',
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: '#FFF',
      headerTitleAlign: 'center',
      headerTitle: 'Linha Materno-Infantil',
      headerLeft: () => (
            <TouchableOpacity
              style={{
                marginHorizontal: 19
              }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="arrow-left" size={28} color="#FFF" />
            </TouchableOpacity>
      )
    });
  });

  const textoNascerNoCeara = () => (
    <>
      <Texto>
        {'A redução da mortalidade materna faz parte das metas dos Objetivos de  Desenvolvimento'}
        {' do Milênio e do Ceará Saudável, e seu monitoramento tem grande importância para fortalecer'}
        {' ou redirecionar as políticas de saúde.'}
        {'\n\n'}
        {'O Nascer no Ceará objetiva reduzir a morbimortalidade materna e perinatal reestruturando a'}
        {' Linha de Cuidado Materno-Infantil, qualificando a assistência às mulheres e crianças'}
        {' no estado através de um conjunto de ações para o fortalecimento da atenção em rede,'}
        {' como a elaboração e implantação de protocolos e condutas assistenciais, baseadas'}
        {' em evidências científicas.'}
        {'\n\n'}
        {'As orientações visam ao manejo clínico, diagnóstico ou tratamento e à organização da'}
        {' assistência baseando-se na estratificação de risco, na parametrização da assistência,'}
        {' nas competências e atribuições de serviços e nos profissionais.'}
      </Texto>
    </>
  );


  return (
    <>
        <ScrollView style={{ flex: 1 }}>
            <Container>
              <SvgView style={{ alignSelf: 'center' }}>
                  <IconSvgMaterno width={335} height={170} />
              </SvgView>
            </Container>
            <View style={{ marginHorizontal: 16, marginTop: 18 }}>
              <Texto>
              {'A Linha de Cuidado Materno-Infantil expressa os fluxos assistenciais'}
              {' de atendimento às necessidades de saúde de mulheres e crianças, através de'}
              {' ações e serviços desenvolvidos nos diferentes pontos da Rede de Atenção à Saúde, '}
              {'nos 184 municípios do Ceará.'}
              {'\n\n'}
              {'Todos os materiais aqui apresentados são elaborados e implantados pela Secretaria '}
              {'da Saúde do Ceará. Eles organizam e orientam a atenção à saúde da gestante, a '}
              {'qualificação dos profissionais médicos e enfermeiros, a oferta de exames específicos, entre outras ações.'}
              {'\n\n'}
              {'A Sesa também acompanha e monitora todas as ações dessa Linha de Cuidado através de sistemas de informação'}
              {' e aplicativos desenvolvidos para esse fim.'}
              </Texto>
            </View>
            <List.Accordion title="Nascer no Ceará">
                <List.Item
                  titleNumberOfLines={80}
                  title={textoNascerNoCeara()}
                />
                 <List.Item
                   title={<Titulo>Guias assistenciais</Titulo>}
                 />
                    <List.Item
                      left={() => <List.Icon icon="file-document" color="#808080" />}
                      title="Estratificação de risco"
                      right={() => <List.Icon icon="chevron-right" />}
                      onPress={() => Linking
                        .openURL('https://coronavirus.ceara.gov.br/wp-content/uploads/2020/11/Nascer_Ceara_1.pdf')
                      }
                    />
                    <Divider />
                    <List.Item
                      left={() => <List.Icon icon="file-document" color="#808080" />}
                      title="Pré-natal de risco habitual"
                      right={() => <List.Icon icon="chevron-right" />}
                      onPress={() => Linking
                        .openURL('https://coronavirus.ceara.gov.br/wp-content/uploads/2020/11/Nascer_Ceara_2.pdf')
                      }
                    />
                    <Divider />
                    <List.Item
                      left={() => <List.Icon icon="file-document" color="#808080" />}
                      title="Pré-natal de alto risco"
                      right={() => <List.Icon icon="chevron-right" />}
                      onPress={() => Linking
                        .openURL('https://coronavirus.ceara.gov.br/wp-content/uploads/2020/11/Nascer_Ceara_3.pdf')
                      }
                    />
                    <Divider />
                    <List.Item
                      left={() => <List.Icon icon="file-document" color="#808080" />}
                      title="Síndromes hipertensivas em gestação"
                      right={() => <List.Icon icon="chevron-right" />}
                      onPress={() => Linking
                        .openURL('https://coronavirus.ceara.gov.br/wp-content/uploads/2020/11/Nascer_Ceara_4.pdf')
                      }
                    />
                    <Divider />
                    <List.Item
                      left={() => <List.Icon icon="file-document" color="#808080" />}
                      title="Hemorragia em Gestação"
                      right={() => <List.Icon icon="chevron-right" />}
                      onPress={() => Linking
                        .openURL('https://coronavirus.ceara.gov.br/wp-content/uploads/2020/11/Nascer_Ceara_5.pdf')
                      }
                    />
            </List.Accordion>
        </ScrollView>
    </>
  );
}

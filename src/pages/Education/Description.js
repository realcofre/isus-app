import * as React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { Title } from 'react-native-paper';
import { WebView } from 'react-native-webview';

export default function DescriptionScreen(props) {
  console.tron.log(props);
  const { route } = props;
  const { item } = route.params;
  console.tron.log(item);
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Title>{item.post_title}</Title>
      <Image
        resizeMode="contain"
        style={{
          height: Dimensions.get('window').width / 1.5,
          width: Dimensions.get('window').width
        }}
        source={{ uri: `${item.image}` }}
      />
      <View
        style={{
          height: Dimensions.get('window').width / 1.5,
          width: Dimensions.get('window').width
        }}
      >
        <WebView originWhitelist={['*']} source={{ html: `${item.content}` }} />
      </View>
    </View>
  );
}

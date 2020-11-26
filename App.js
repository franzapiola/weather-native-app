import * as React from 'react';
import * as eva from '@eva-design/eva';
import { StatusBar, StyleSheet } from 'react-native';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { Provider } from 'react-redux';
import store from './redux/store';

import Index from './components/Index.jsx';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight
  }
});

export default function App() {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
        <Layout style={styles.layout}>
          <Index />
        </Layout>
      </ApplicationProvider>
    </Provider>
  );
}

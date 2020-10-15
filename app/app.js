import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import RootScreen from '@scenes/RootScreen';
import createStore from 'app/rootReducer';
import { translationMessages } from './i18n';
import LanguageProvider from './components/atoms/LanguageProvider';

const { store, persistor } = createStore();

const App = () => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <PersistGate loading={null} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </LanguageProvider>
  </Provider>
);

export default App;

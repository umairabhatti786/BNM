import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootNavigator from './src/routes';


const App = ({children, edges}: any) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <BottomSheetModalProvider>
          <RootNavigator />
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

import {configureStore, Action} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootReducer from '../reducers/rootReducer';


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });



export const useAppDispatch = () => useDispatch();
export default store;
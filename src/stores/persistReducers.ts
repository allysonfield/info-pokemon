import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'taskCheck',
      storage: AsyncStorage,
      whitelist: ['auth', 'usuario', 'task'],
    },
    reducers,
  );

  return persistedReducer;
};

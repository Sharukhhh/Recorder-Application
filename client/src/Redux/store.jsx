import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../Redux/userSlice';
import {persistStore , persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key : 'auth',
    storage
}

const authPersistReducer = persistReducer(persistConfig , userReducer);

const store = configureStore({
    reducer : {
        auth : authPersistReducer
    }
})

const persistor = persistStore(store);

export {persistor, store};
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter'
import server from './reducers/server'

export default configureStore({
    reducer: {
        // add new any new reducers here .
        counter: counterReducer,
        server: server,
    },
})
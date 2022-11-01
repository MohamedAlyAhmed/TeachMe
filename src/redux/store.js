import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter'

export default configureStore({
    reducer: {
        // add new any new reducers here .
        counter: counterReducer,
    },
})
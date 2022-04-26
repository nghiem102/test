import {configureStore} from '@reduxjs/toolkit'
import FileReducer from '../slice/FileStore'

const store = configureStore({
    reducer: {
        file: FileReducer
    }
})

export default store
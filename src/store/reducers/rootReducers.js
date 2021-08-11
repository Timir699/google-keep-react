import { combineReducers } from 'redux'
import demoReducer from './demoReducer'
import noteReducer from './noteReducer'

const rootReducer = combineReducers({
    demo: demoReducer,
    // notes: noteReducer
})

export default rootReducer
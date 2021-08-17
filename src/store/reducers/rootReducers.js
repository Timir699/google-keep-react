import { combineReducers } from 'redux'
import ThrashReducer from './thrashReducer'

const rootReducer = combineReducers({
    trashData: ThrashReducer,
})

export default rootReducer
import { combineReducers } from 'redux'
import PostMomentReducer from './PostMomentReducer'

export default combineReducers({
  create: PostMomentReducer
})

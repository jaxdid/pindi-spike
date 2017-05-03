import {
  DESCRIPTION_CHANGED,
  EMOJI_CHANGED
  // LOGIN_USER_ATTEMPT,
  // LOGIN_USER_SUCCESS,
  // LOGIN_USER_FAILURE
} from '../actions/types'

const INITIAL_STATE = {
  description: '',
  emoji: '',
  loading: null,
  user: null,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DESCRIPTION_CHANGED:
      return { ...state, description: action.payload }
    case EMOJI_CHANGED:
      return { ...state, emoji: action.payload }
    // case LOGIN_USER_ATTEMPT:
    //   return { ...state, loading: true, error: '' }
    // case LOGIN_USER_SUCCESS:
    //   return { ...state, ...INITIAL_STATE, user: action.payload }
    // case LOGIN_USER_FAILURE:
    //   return { ...state, error: 'Authentication Failed.', password: '', loading: false }
    default:
      return state
  }
}

import firebase from 'firebase'
import {
  DESCRIPTION_CHANGED,
  EMOJI_CHANGED,
  // LOGIN_USER_ATTEMPT,
  // LOGIN_USER_SUCCESS,
  // LOGIN_USER_FAILURE
} from './types'

export const descriptionChanged = descriptionText => {
  return {
    type: DESCRIPTION_CHANGED,
    payload: descriptionText
  }
}

export const emojiChanged = emojiCode => {
  return {
    type: EMOJI_CHANGED,
    payload: emojiCode
  }
}

// export const loginUser = ({ email, password }) => {
//   return dispatch => {
//     dispatch({ type: LOGIN_USER_ATTEMPT })
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(user => loginUserSuccess(dispatch, user))
//       .catch((e) => {
//         console.log(e)
//         firebase.auth().createUserWithEmailAndPassword(email, password)
//           .then(user => loginUserSuccess(dispatch, user))
//           .catch(() => loginUserFailure(dispatch))
//       })
//   }
// }

// const loginUserSuccess = (dispatch, user) => {
//   dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
// }
//
// const loginUserFailure = dispatch => {
//   dispatch({ type: LOGIN_USER_FAILURE })
// }

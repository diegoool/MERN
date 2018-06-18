import cookie from 'react-cookie';
import jtwDecode from 'jwt-decode';

// -----------------------------
// Constants
// -----------------------------

const GET_USERS = 'GET_USERS'
const GET_USER_ACTIVE = 'GET_USER_ACTIVE'

// -----------------------------
// Actions
// -----------------------------

export function getUsers (users) {
  return {
    type: GET_USERS,
    payload: users
  }
}

export function getUserActive (userDto) {
  return {
    type: GET_USER_ACTIVE,
    payload: userDto
  }
}

// ----------------------------
// Async Functions Calls
// ----------------------------
//  This is a thunk, meaning it is a function that immediately
//  returns a function for lazy evaluation. It is incredibly useful for
//  creating async actions, especially when combined with redux-thunk!

// Loads user details from Passad.Identity.Api
// userIdDTOs 'state.customer.customerUsers.users ...its en array!'

export const fetchUsers = () => {
  return (dispatch, getState) => {
    fetch(`/api/users`)
    .then(res => res.json())
    .then(data => {
      dispatch(getUsers(data))
    }
    );
  }
}

export const getUserDetails = () => {
  return (dispatch, getState) => {
    // const token = cookie.load('token');
    let token = getState().auth.token
    let userToken = jtwDecode(token)
    let userDto = userToken._doc
    dispatch(getUserActive(userDto))
  }
}

// ----------------------------
// ACTION HANDLERS
// ----------------------------
const ACTION_HANDLERS = {
  [GET_USERS]: (state, action) => {
    return {
      ...state,
      users: action.payload
    }
  },
  [GET_USER_ACTIVE]: (state, action) => {
    return {
      ...state,
      user: action.payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  users: null,
  user: null
}

export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

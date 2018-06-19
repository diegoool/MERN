import cookie from 'react-cookie';
import jtwDecode from 'jwt-decode';

// -----------------------------
// Constants
// -----------------------------

const GET_USERS = 'GET_USERS'
const GET_USER_ACTIVE = 'GET_USER_ACTIVE'
const EDIT_PROFILE_INFO = 'EDIT_PROFILE_INFO'

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

export function changeProfileEdit (id, value) {
  return {
    type: EDIT_PROFILE_INFO,
    id: id,
    payload: value
  }
}

// ----------------------------
// Async Functions Calls
// ----------------------------

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
  },
  [EDIT_PROFILE_INFO]: (state, action) => {
    if (action.id === 'first-name'){
    return {
      ...state,
      user: {
        ...state.user,
        first_name:action.payload
      }
    }
  } else if (action.id === 'last-name'){
    return {
      ...state,
      user: {
        ...state.user,
        last_name: action.payload
      }
    }
  } else if (action.id === 'email'){
    return {
      ...state,
      user: {
        ...state.user,
        email: action.payload
      }
    }
  }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  users: null,
  user: {}
}

export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

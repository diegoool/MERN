import cookie from 'react-cookie';
import jtwDecode from 'jwt-decode';
import {browserHistory} from 'react-router';

// -----------------------------
// Constants
// -----------------------------

const GET_USERS = 'GET_USERS'
const GET_USER_ACTIVE = 'GET_USER_ACTIVE'
const EDIT_PROFILE_INFO = 'EDIT_PROFILE_INFO'
const EDIT_SETTINGS = 'EDIT_SETTINGS'
const EDIT_EDIT_PAGE = 'EDIT_EDIT_PAGE'

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

export function changeProfile (id, value) {
  return {
    type: EDIT_PROFILE_INFO,
    id: id,
    payload: value
  }
}

export function saveSettings () {
  console.log('save save')
}

export function changeEdit (id, value) {
  return {
    type: EDIT_EDIT_PAGE,
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


export const saveProfile = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token
    let userToken = jtwDecode(token)
    let id = userToken._doc._id
    console.log(JSON.stringify(getState().user.user))
      fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(getState().user.user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      }
      )
      .catch(() => {
          console.log('Error')
      });
  };
}

export const saveSettings = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token
    let userToken = jtwDecode(token)
    let id = userToken._doc._id
      fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(getState().user.user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      }
      )
      .catch(() => {
          console.log('Error')
      });
  };
}

export const saveEdit = () => {
  return (dispatch, getState) => {
    let token = getState().auth.token
    let userToken = jtwDecode(token)
    let id = userToken._doc._id
      fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(getState().user.user),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      }
      )
      .catch(() => {
          console.log('Error')
      });
  };
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
  },
  [EDIT_SETTINGS]: (state, action) => {
    if (action.id === 'site-title'){
      return {
        ...state,
        user: {
          site:{
            settings:{
              ...state.user.site.settings,
              title: action.payload
            }
          }
        }
      }
    } else if (action.id === 'site-keywords'){
      return {
        ...state,
        user: {
          ...state.user,
          site:{
            settings:{
              ...state.user.site.settings,
              keywords: action.payload
            }
          }
        }
      }
    } else if (action.id === 'site-description'){
      return {
        ...state,
        user: {
          ...state.user,
          site:{
            settings:{
              ...state.user.site.settings,
              description: action.payload
            }
          }
        }
      }
    }
  },
  [EDIT_EDIT_PAGE]: (state, action) => {
    if (action.id === 'site-title'){
      return {
        ...state,
        user: {
          site:{
            settings:{
              ...state.user.site.settings,
              title: action.payload
            }
          }
        }
      }
    } else if (action.id === 'site-keywords'){
      return {
        ...state,
        user: {
          ...state.user,
          site:{
            settings:{
              ...state.user.site.settings,
              keywords: action.payload
            }
          }
        }
      }
    } else if (action.id === 'site-description'){
      return {
        ...state,
        user: {
          ...state.user,
          site:{
            settings:{
              ...state.user.site.settings,
              description: action.payload
            }
          }
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

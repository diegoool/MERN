import cookie from 'react-cookie';
import jtwDecode from 'jwt-decode';
import {browserHistory} from 'react-router';

// -----------------------------
// Constants
// -----------------------------

const GET_SITES = 'GET_SITES'


// -----------------------------
// Actions
// -----------------------------

export function getSites (sites) {
  return {
    type: GET_SITES,
    payload: sites
  }
}

// ----------------------------
// Async Functions Calls
// ----------------------------

export const fetchSites = () => {
  return (dispatch, getState) => {
    fetch(`/api/sites`)
    .then(res => res.json())
    .then(data => {
      dispatch(getSites(data))
    }
    );
  }
}

export const createNewSite = (title, ownerId) => {
  return (dispatch, getState) => {
    let token = getState().auth.token
    let userToken = jtwDecode(token)
    let id = userToken._doc._id
      fetch(`/api/sites`, {
        method: 'POST',
        body: JSON.stringify({siteName: title, ownerId: ownerId}),
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

// ----------------------------
// ACTION HANDLERS
// ----------------------------
const ACTION_HANDLERS = {
  [GET_SITES]: (state, action) => {
    return {
      ...state,
      sites: action.payload
    }
  }
  // ,
  // [EDIT_PROFILE_INFO]: (state, action) => {
  //   if (action.id === 'first-name'){
  //     return {
  //       ...state,
  //       user: {
  //         ...state.user,
  //         first_name:action.payload
  //       }
  //     }
  //   } else if (action.id === 'last-name'){
  //     return {
  //       ...state,
  //       user: {
  //         ...state.user,
  //         last_name: action.payload
  //       }
  //     }
  //   } else if (action.id === 'email'){
  //     return {
  //       ...state,
  //       user: {
  //         ...state.user,
  //         email: action.payload
  //       }
  //     }
  //   }
  // }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  sites: null
}

export default function siteReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

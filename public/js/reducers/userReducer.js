
// -----------------------------
// Constants
// -----------------------------

const GET_USER = 'GET_USER'

// -----------------------------
// Actions
// -----------------------------

export function getUser () {
  return {
    type: GET_USER
  }
}

export const hello = () => {
  console.log('hello')
}


// ----------------------------
// Async Functions Calls
// ----------------------------
//  This is a thunk, meaning it is a function that immediately
//  returns a function for lazy evaluation. It is incredibly useful for
//  creating async actions, especially when combined with redux-thunk!

//
// Loads user details from Passad.Identity.Api
// userIdDTOs 'state.customer.customerUsers.users ...its en array!'

export const getUserDetails = () => {
  return (dispatch, getState) => {
      // dispatch(getUser())
      //  let token = getState().identity.user.access_token
      fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // M.toast({html: 'Task Saved'})
        // this.setState({title: '', description: ''});
        // this.fecthTask();
    })
    .catch( err => console.log(err))
  }
}

// ----------------------------
// ACTION HANDLERS
// ----------------------------
const ACTION_HANDLERS = {
  [GET_USER]: (state, action) => {
    return {
      ...state,
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  users: null
}

export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

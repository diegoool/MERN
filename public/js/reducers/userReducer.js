import cookie from 'react-cookie';
import jtwDecode from 'jwt-decode';
import {browserHistory} from 'react-router';

// -----------------------------
// Constants
// -----------------------------

const GET_USERS = 'GET_USERS'
const GET_USER_ACTIVE = 'GET_USER_ACTIVE'
const EDIT_PROFILE_INFO = 'EDIT_PROFILE_INFO'
const EDIT_SETTINGS_HANDLE = 'EDIT_SETTINGS_HANDLE'
const EDIT_PAGE_HANDLE = 'EDIT_PAGE_HANDLE'

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

export function changeEdit (id, value) {
  return {
    type: EDIT_PAGE_HANDLE,
    id: id,
    payload: value
  }
}

export function changeSettings (id, value) {
  return {
    type: EDIT_SETTINGS_HANDLE,
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
  [EDIT_SETTINGS_HANDLE]: (state, action) => {
    switch (action.id) {
      case 'site-title':
        return {
          ...state,
          user: {
            ...state.user,
            site:{
              ...state.user.site,
              settings:{
                ...state.user.site.settings,
                title: action.payload
              }
            }
          }
        }
        
      case 'site-keywords':
        return {
          ...state,
          user: {
            ...state.user,
            site:{
              ...state.user.site,
              settings:{
                ...state.user.site.settings,
                keywords: action.payload
              }
            }
          }
        }
        
      case 'site-description':
        return {
          ...state,
          user: {
            ...state.user,
            site:{
              ...state.user.site,
              settings:{
                ...state.user.site.settings,
                description: action.payload
              }
            }
          }
        }

      default:
      return state;
    }
  },
  [EDIT_PAGE_HANDLE]: (state, action) => {
    switch (action.id) {
      case 'text-fonts':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                text: {
                  ...state.user.site.formatContent.text,
                  font: action.payload
                }
              }
            }
          }
        }
      
        case 'text-size':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                text: {
                  ...state.user.site.formatContent.text,
                  size: action.payload
                }
              }
            }
          }
        }
        
        case 'text-color':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                text: {
                  ...state.user.site.formatContent.text,
                  color: action.payload
                }
              }
            }
          }
        }
        
        case 'text-lineheight':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                text: {
                  ...state.user.site.formatContent.text,
                  lineheight: action.payload
                }
              }
            }
          }
        }
    
      
      case 'title-h1-fonts':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,              
                h1:{
                  ...state.user.site.formatContent.h1,
                  font: action.payload
                }  
              }
            }
          }
        }
    
      case 'title-h1-size':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h1:{
                  ...state.user.site.formatContent.h1,
                  size: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h1-color':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h1:{
                  ...state.user.site.formatContent.h1,
                  color: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h1-underline':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h1:{
                  ...state.user.site.formatConte.h1,
                  underline: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h1-bold':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h1:{
                  ...state.user.site.formatConte.h1,
                  bold: action.payload
                }
            }
            }
          }
        }
    
      case 'title-h1-cursiva':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h1:{
                  ...state.user.site.formatContent.h1,
                  cursiva: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h1-uppercase':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h1:{
                  ...state.user.site.formatContent.h1,
                  uppercase: action.payload
                }
              }
            }
          }
        }

      case 'title-h2-fonts':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h2:{
                  ...state.user.site.formatContent.h2,
                  font: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h2-size':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h2:{
                  ...state.user.site.formatContent.h2,
                  size: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h2-color':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h2:{
                  ...state.user.site.formatContent.h2,
                  color: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h2-underline':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h2:{
                  ...state.user.site.formatContent.h2,
                  underline: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h2-bold':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h2:{
                  ...state.user.site.formatContent.h2,
                  bold: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h2-cursiva':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h2:{
                  ...state.user.site.formatContent.h2,
                  cursiva: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h2-uppercase':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h2:{
                  ...state.user.site.formatContent.h2,
                  uppercase: action.payload
                }
              }
            }
          }
        }

      case 'title-h3-fonts':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h3:{
                  ...state.user.site.formatContent.h3,
                  font: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h3-size':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h3:{
                  ...state.user.site.formatContent.h3,
                  size: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h3-color':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h3:{
                  ...state.user.site.formatContent.h3,
                  color: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h3-underline':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h3:{
                  ...state.user.site.formatContent.h3,
                  underline: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h3-bold':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h3:{
                  ...state.user.site.formatContent.h3,
                  bold: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h3-cursiva':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h3:{
                  ...state.user.site.formatContent.h3,
                  cursiva: action.payload
                }
              }
            }
          }
        }
    
      case 'title-h3-uppercase':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                h3:{
                  ...state.user.site.formatContent.h3,
                  uppercase: action.payload
                }
              }
            }
          }
        }
         
      case 'link-size':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                link:{
                  ...state.user.site.formatContent.link,
                  size: action.payload
                }
              }
            }
          }
        }
      
      case 'link-color':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                link:{
                  ...state.user.site.formatContent.link,
                  color: action.payload
                }
              }
            }
          }
        }
    
      case 'link-color-hover':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                link:{
                  ...state.user.site.formatContent.link,
                  colorHover: action.payload
                }
              }
            }
          }
        }
    
      case 'link-underline':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                link:{
                  ...state.user.site.formatContent.link,
                  underline: action.payload
                }
              }
            }
          }
        }
      
      case 'link-bold':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                link:{
                  ...state.user.site.formatContent.link,
                  bold: action.payload
                }
              }
            }
          }
        }
      
      case 'link-cursiva':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                link:{
                  ...state.user.site.formatContent.link,
                  cursiva: action.payload
                }
              }
            }
          }
        }
      
      case 'link-uppercase':
        return {
          ...state,
          user: {
            site:{
              ...state.user.site,
              formatContent:{
                ...state.user.site.formatContent,
                link:{
                  ...state.user.site.formatContent.link,
                  uppercase: action.payload
                }
              }
            }
          }
        }

      default:
      return state;
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

import TokenService from './token-service'
import config from '../config'

const NoteApiService = {
  getNotesByPubId(id) {
    return fetch(`${config.API_BASE_URL}/notes/publication/${id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  // getNote(id) {
  //   return fetch(`${config.API_BASE_URL}/users/${userId}/notes/note/${id}`, {
  //     headers: {
  //       'authorization': `bearer ${TokenService.getAuthToken()}`
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // },
  patchNote(id, newNotes) {
    return fetch(`${config.API_BASE_URL}/notes/note/${id}`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        text: newNotes
      })
    })
    .then(res =>{
      if (!res.ok) {
        res.json().then(e => Promise.reject(e))
      }
    })
  },
  initializeNotes(id) {
    return fetch(`${config.API_BASE_URL}/notes/publication/${id}`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res =>{
      if (!res.ok) {
        res.json().then(e => Promise.reject(e))
      }
    })
  },
  deleteNotes(id) {
    return fetch(`${config.API_BASE_URL}/notes/publication/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res =>{
      if (!res.ok) {
        res.json().then(e => Promise.reject(e))
      }
    })
  }
}

export default NoteApiService
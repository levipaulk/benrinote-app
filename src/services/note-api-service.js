import TokenService from './token-service'
import config from '../config'

const NoteApiService = {
  getNotes(pubId) {
    return fetch(`${config.API_BASE_URL}/notes/${pubId}`, {
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
  // getNote(userId, noteId) {
  //   return fetch(`${config.API_BASE_URL}/users/${userId}/notes/${noteId}`, {
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
  patchNote(noteId, newNotes) {
    return fetch(`${config.API_BASE_URL}/notes/${noteId}`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        text: newNotes,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  // deleteNote(pubId, userId) {
  //   return fetch(`${config.API_BASE_URL}/notes/${pubId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'authorization': `bearer ${TokenService.getAuthToken()}`
  //     },
  //   })
  //     .then(res =>
  //       (!res.ok)
  //         ? res.json().then(e => Promise.reject(e))
  //         : res.json()
  //     )
  // }
}

export default NoteApiService
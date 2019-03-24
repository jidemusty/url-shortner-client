import * as api from '../api'

export const shortenUrl = ({ commit, state }) => {
  commit('setShortened', null)
  commit('setWaiting', true)
  api.post({ url: state.url }).then((response) => {
    commit('setShortened', response.data.data)
    commit('setUrl', null)
    commit('setWaiting', false)
  }).catch((error) => {
    console.log(error.response)
  })
}

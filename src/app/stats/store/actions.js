import * as api from '../api'

export const getStats = ({ commit, dispatch }, code) => {
  return api.get({ code }).then((response) => {
    commit('setStats', response.data.data)
  })
}

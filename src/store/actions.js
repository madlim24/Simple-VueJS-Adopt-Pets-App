export default {
    addPet: ({ commit }, payload) => {
        commit('appendPet', payload)
    }
    //  context only need commit method
    // commit object comes from vuex
}

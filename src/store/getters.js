import state from './state'

export default {
    animalsCount: (state) => {
        return state.cats.length + state.dogs.length
    },
    getAllCats: () => {
        return state.pets.filter((pets) => {
            return pets.species === 'cat'
        })
    }
}

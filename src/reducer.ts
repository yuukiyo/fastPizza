import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Actions } from './action'

export interface State {
    username: string,
    price: number,
    quantity: number,
    postalCode: string,
    prefecture: string,
    address: string
}

const initialState: State = {
    username: '',
    price: 0,
    quantity: 0,
    postalCode: '',
    prefecture: '',
    address: ''
}

export const Reducers = reducerWithInitialState(initialState)
    .case(Actions.updateUsername, (state, username) => {
        return Object.assign({}, state, { username })
    })
    .case(Actions.updatePrice, (state, price) => {
        return Object.assign({}, state, { price })
    })
    .case(Actions.updateQuantity, (state, quantity) => {
        return Object.assign({}, state, { quantity })
    })
    .case(Actions.updatePostalCode, (state, postalCode) => {
        return Object.assign({}, state, { postalCode })
    })
    .case(Actions.updatePrefecture, (state, prefecture) => {
        return Object.assign({}, state, { prefecture })
    })
    .case(Actions.updateAddress, (state, address) => {
        return Object.assign({}, state, { address })
    })
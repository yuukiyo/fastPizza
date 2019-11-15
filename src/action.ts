import actionCreatorFactory, { } from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const Actions = {
    updateUsername: actionCreator<string>('UPDATE_USERNAME'),
    updatePrice: actionCreator<number>('UPDATE_PRICE'),
    updateQuantity: actionCreator<number>('UPDATE_QUANTITY'),
    updatePostalCode: actionCreator<string>('UPDATE_POSTALCODE'),
    updatePrefecture: actionCreator<string>('UPDATE_PREFECTURE'),
    updateAddress: actionCreator<string>('UPDATE_ADDRESS'),
}
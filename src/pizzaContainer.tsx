import { connect } from "react-redux";
import { AppState } from './store';
import { PizzaComponent } from "./pizzaComponent";
import { Dispatch } from "redux";
import { Actions } from "./action";
// import Amplify, { Auth } from 'aws-amplify'
// import { API, graphqlOperation } from 'aws-amplify'
// import awsconfig from './aws-exports';
// Amplify.configure(awsconfig);

export interface pizzaHundler {
    hundleInit(): void
    hundleOrder(username: string,
        price: number,
        postalCode: string,
        prefecture: string,
        address: string
    ): void
    hundleUpdateQuantity(event: any, newValue: number | number[]): void
    hundleUpdatePostalCode(postalCode: string): void
    hundleUpdatePrefecture(prefecture: string): void
    hundleUpdateAddress(address: string): void
}

const hundleInit = () => async (dispatch: Dispatch) => {
    const login: string = '吉田'
    dispatch(Actions.updateUsername(login))
    // Auth.currentSession()
    // .then(data => {
    //     dispatch(Actions.updateUsername(data["accessToken"]["payload"]["username"]))
    // })
    // .catch(err => console.log(err));
}

const hundleUpdateQuantity = (event: any, quantity: number) => async (dispatch: Dispatch) => {
    dispatch(Actions.updateQuantity(quantity))
    const price = quantity > 9 ? 9800 : quantity * 1000
    dispatch(Actions.updatePrice(price))
}

const hundleUpdatePostalCode = (postalCode: string) => async (dispatch: Dispatch) => {
    if (!isNaN(Number(postalCode)) && postalCode.length < 8) {
        dispatch(Actions.updatePostalCode(postalCode))
    }
}

const hundleUpdatePrefecture = (prefecture: string) => async (dispatch: Dispatch) => {
    dispatch(Actions.updatePrefecture(prefecture))
}

const hundleUpdateAddress = (address: string) => async (dispatch: Dispatch) => {
    dispatch(Actions.updateAddress(address))
}

const hundleOrder = (
    username: string,
    price: number,
    postalCode: string,
    prefecture: string,
    address: string
) => async () => {
    console.log(username)
    console.log(price)
    console.log(postalCode)
    console.log(prefecture)
    console.log(address)
}

const mapStateToProps = (appState: AppState) => {
    return Object.assign({}, appState.state, {
        username: appState.state.username,
    })
}
export default connect(mapStateToProps, {
    hundleInit,
    hundleOrder,
    hundleUpdateQuantity,
    hundleUpdatePostalCode,
    hundleUpdatePrefecture,
    hundleUpdateAddress
})(PizzaComponent)
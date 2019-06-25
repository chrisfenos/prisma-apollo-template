import {
    MODIFY_META_MASK,
} from '../actionTypes/providerTypes';



// track meta mask to disable app buttons without provider
export const setMetaMaskAccount = (address) => {    
    return (dispatch) => {
        dispatch({
            type: MODIFY_META_MASK,
            payload: address
        })
    }
}
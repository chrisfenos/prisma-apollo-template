import {
    MODIFY_META_MASK,
} from '../actionTypes/providerTypes';

// track meta mask to disable app buttons without provider
export const toggleMetaMask = (flag) => {    
    return (dispatch) => {
        dispatch({
            type: MODIFY_META_MASK,
            payload: flag
        })
    }
}
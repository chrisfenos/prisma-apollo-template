import * as actions from '../actionTypes/providerTypes';
  
  const INITIAL_STATE = {
    metaMaskEnabled: false,
  };
  
// if the domain register button is clicked -> added to domain feed
// global domain log for the entire app to see -> realtime feed of web 2.0 domain activity

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actions.MODIFY_META_MASK:
        return { ...state, metaMaskEnabled: action.payload };
      default:
        return state;
    }
  };
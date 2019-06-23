import * as actions from '../actionTypes/domainTypes';
  
  const INITIAL_STATE = {
    domainFeed: [], // temporary log for every time you search for a domain -> mapping of hash -> obj
    cleanseRate: 10, // how often do you clear your saved searches -> every x amount of posts
    savedDomains: [], // domains you saved get removed from feed & placed here -> [hash] => will point to domain feed index
    currentDomainIndex: 0, // displays a domain object
  };
  
// if the domain register button is clicked -> added to domain feed
// global domain log for the entire app to see -> realtime feed of web 2.0 domain activity

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case actions.SET_DOMAIN_SEARCH:
        return { ...state, domainFeed: action.payload };
    case actions.SAVE_DOMAIN_SEARCH:
        return { ...state, savedDomains: action.payload };
      default:
        return state;
    }
  };
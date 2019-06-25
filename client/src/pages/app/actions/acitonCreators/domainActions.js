import {
    SET_DOMAIN_SEARCH,
    SAVE_DOMAIN_SEARCH,
    CLEAR_DOMAIN_SEARCH,
    REMOVE_DOMAIN_SEARCH,
    DEPLOY_DOMAIN_PROXY,
    DOMAIN_PROXY_DEPLOYED,
    DOMAIN_PROXY_MINED,
} from '../actionTypes/domainTypes';

/**
 * logDomainRequest caches all your previously searched domains and uses this data to check
 * if any of your app preferences have flagged the website. Ex. I want to be alerted of all
 * websites i visit that have had growth in advertisment over the last 24 hours.
 * 
 * This could fill a domain cache, which logs every request that has content in your app state.
 * You can group together domain requests and view the activity later on as a report form.
 * Ex. Every 50 url requests I want a report of those domain activities and can fill in certain 
 * criteria. Ad related info for domain investing opporunities. Community engagement and public 
 * discussion, maybe you want to be alerted of domains with unsoliticted media with growing
 * hidden posts. The goal is to have every interaction noted and filterable to create this custom 
 * web curation experience.
 * @param {*} param0 
 */
export const logDomainRequest = (url) => {    
    // maybe check local cache if url hash is there,
    // else hash the input and check the db
    return (dispatch) => {
        dispatch({
            type: SET_DOMAIN_SEARCH,
            payload: url
        })
    }
}

/**
 * saveDomainRequestToCache will save locally all the searches you have made so you have a history
 * of your browsing experience.
 * @param {*} param0 
 */
export const saveDomain = (url) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_DOMAIN_SEARCH,
            payload: url
        })
    }
}

/**
 * clearLocalDomainHistory will reset your local account and remove all your searches.
 * Platform never saves these domain requests for privacy related concerns.
 * @param {*} param0 
 */
export const clearLocalDomainHistory = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_DOMAIN_SEARCH
        })
    }
}

/**
 * removeDomainSearchByUrl removes a search from your local history
 * NOTE: write function that takes state, object to be deleted, and returns state wihtout it.
 * @param {*} state 
 * @param {*} url 
 */
export const removeDomainSearchByUrl = (state, url) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_DOMAIN_SEARCH
        })
    }
}


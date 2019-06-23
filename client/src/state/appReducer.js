/**
 * App reducer will always expose all reducer in the application.
 * In order to have an easily maintainble project, state related logic is kept in the root directory 
 * of any given feature directory in the actions directory. These can be apollo queries or redux
 * actions.
 */

 import domainReducer from '../pages/app/actions/reducers/domainSearch';

 export default domainReducer;
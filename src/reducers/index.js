import { combineReducers } from 'redux';

import cards from './cards';
import endpoint from './endpoint';

export default combineReducers({
	cards,
	endpoint,
});

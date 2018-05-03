import { UPDATE_CARD } from '../actions/card-action';

const initialState = {
	listCard: [],
};

export default function cardReducer(state = initialState, { type, payload }) {
	switch (type) {
	case UPDATE_CARD:
		return { listCard: payload.listCard };
	default:
		return state;
	}
}

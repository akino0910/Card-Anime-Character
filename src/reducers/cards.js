export default function cards(state = [], action) {
	switch (action.type) {
	case 'CARDS_FETCH_DATA_SUCCESS':
		return action.cards;
	case 'ADD_CARD':
		return [...state, action.card];
	default:
		return state;
	}
}

export default function cards(state = [], action) {
	switch (action.type) {
	case 'CARDS_FETCH_DATA_SUCCESS':
		return action.cards;
	case 'ADD_CARD':
		return [...state, action.card];
	case 'DELETE_CARD':
		return state.filter(card => card._id !== action.id);
	case 'EDIT_CARD': {
		const newState = [...state];
		newState[action.index].title = action.card.title;
		newState[action.index].description = action.card.description;
		newState[action.index].images = action.card.images;
		return newState;
	}
	default:
		return state;
	}
}

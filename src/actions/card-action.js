export const UPDATE_CARD = 'cards: updateCard';

export function updateCard(newListCard) {
	return {
		type: UPDATE_CARD,
		payload: {
			listCard: newListCard,
		},
	};
}

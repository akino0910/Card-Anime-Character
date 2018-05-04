export function addCard(card) {
	return {
		type: 'ADD_CARD',
		card,
	};
}

export function deleteCard(card) {
	return {
		type: 'ADD_CARD',
		card,
	};
}

export function cardsFetchDataSuccess(cards) {
	return {
		type: 'CARDS_FETCH_DATA_SUCCESS',
		cards,
	};
}

export function cardsFetchData(url) {
	return dispatch => {
		fetch(url)
			.then(response => response.json())
			.then(cards => dispatch(cardsFetchDataSuccess(cards)))
			.catch(err => console.log(err));
	};
}

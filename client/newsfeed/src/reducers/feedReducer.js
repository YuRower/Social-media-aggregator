import constants from '../constants'

var initialState = {
	all: null,
	selected: null
}

export default (state = initialState, action) => {
	let newState = Object.assign({}, state)

	switch (action.type) {

		case constants.FEEDS_RECEIVED:
			// console.log('FEEDS_RECEIVED: ' + JSON.stringify(action.data))
			newState['all'] = action.data
			return newState

		case constants.FEED_CREATED:
			// console.log('REDUCER_FEED_CREATED: ' + JSON.stringify(action.data))
			let all = (newState.all) ? Object.assign([], newState.all) : []
			all.unshift(action.data)
			newState['all'] = all
			return newState

		case constants.SELECT_FEED:
			// console.log('SELECT_FEED: ' + JSON.stringify(action.data))
			newState['selected'] = action.data
			return newState

		default:
			return state
	}
}
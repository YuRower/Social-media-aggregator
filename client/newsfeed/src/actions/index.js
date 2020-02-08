import constants from '../constants'
import { TurboClient, HTTP } from '../utils'

const getRequest = (endpoint, params, actionType) => {
	return dispatch => HTTP.get(endpoint, params)
		.then(data => {
			if (actionType != null){
				dispatch({
					type: actionType,
					params: params, // can be null
					data: data
				})
			}
			
			return data
		})
		.catch(err => {
			throw err
		})
}


export default {

	fetchRssFeed: (url, params) => {
		return dispatch => {
			return dispatch(getRequest(url, params, constants.RSS_FEED_RECEIVED))
		}
	},


	selectFeed: (feed) => {
		return {
			type: constants.SELECT_FEED,
			data: feed
		}
	},

	fetchFeeds: (params) => {
		return dispatch => {
			return dispatch(TurboClient.getRequest('feed', params, constants.FEEDS_RECEIVED))
		}
	},

	createFeed: (params) => {
		return dispatch => {
			return dispatch(TurboClient.postRequest('feed', params, constants.FEED_CREATED))
		}
	}

	// fetchUsers: (params) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.getRequest('user', params, constants.USERS_RECEIVED))
	// 	}
	// },

	// addUser: (params) => {
		// return dispatch => {
		// 	return dispatch(TurboClient.postRequest('user', params, constants.USER_CREATED))
		// }
	// },

	// loginUser: (credentials) => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.login(credentials, constants.CURRENT_USER_RECEIVED))
	// 	}
	// },

	// currentUser: () => {
	// 	return dispatch => {
	// 		return dispatch(TurboClient.currentUser(constants.CURRENT_USER_RECEIVED))
	// 	}
	// }
	
}

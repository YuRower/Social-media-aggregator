import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'


class Feeds extends Component {
	constructor(){
		super()
		this.state = {

		}
	}

	componentDidMount(){
		this.props.fetchFeeds(null)
		.then(data => {
			console.log('FEEDS: ' + JSON.stringify(data))
		})
		.catch(err => {
			console.log('Error: ' + err.message)
		})
	}

	selectFeed(feed, event){
		event.preventDefault()
		this.props.selectFeed(feed)

		const items = this.props.rss[feed.url]
		if (items != null){ // we already have the data!
			console.log(JSON.stringify(items))
			return
		}

		// https://api.rss2json.com/v1/api.json?rss_url=http://www.nydailynews.com/cmlink/NYDN.Sports.rss
		const endpoint = 'https://api.rss2json.com/v1/api.json'
		const params = {
			// rss_url: 'http://www.nydailynews.com/cmlink/NYDN.Sports.rss'
			rss_url: feed.url
		}

		this.props.fetchRssFeed(endpoint, params)
		.then(data => {
			// console.log('RSS FEED: ' + JSON.stringify(data))
		})
		.catch(err => {
			alert('Error: ' + err.message)
		})
	}

	render(){
		const feeds = this.props.feed.all || []

		return (
            <ul>
            	{ feeds.map((feed, i) => {
            			const color = (feed == this.props.feed.selected) ? 'red' : '#333'
	            		return (
	            			<li key={feed.id}>
	            				<a style={{color:color}} onClick={this.selectFeed.bind(this, feed)} href="#">{feed.name}</a>
	            			</li>
	            		)
	            	})
            	}
            </ul>

		)
	}
}

const stateToProps = (state) => {
	return {
		feed: state.feed,
		rss: state.rss
	}
}

const dispatchToProps = (dispatch) => {
	return {
		fetchFeeds: (params) => dispatch(actions.fetchFeeds(params)),
		createFeed: (params) => dispatch(actions.createFeed(params)),
		selectFeed: (feed) => dispatch(actions.selectFeed(feed)),
		fetchRssFeed: (url, params) => dispatch(actions.fetchRssFeed(url, params))
	}
}

export default connect(stateToProps, dispatchToProps)(Feeds)

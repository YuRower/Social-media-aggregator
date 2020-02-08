import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Feed extends Component {

	render(){
		const selectedFeed = this.props.feed.selected
		// const name = (selectedFeed) ? selectedFeed.name : 'Welcome to NewsFeed'

		let name = 'Welcome to NewsFeed'
		let items = []
		if (selectedFeed){
			name = selectedFeed.name
			items = (this.props.rss[selectedFeed.url]) ? this.props.rss[selectedFeed.url] : []
		}

		return (
			<div className="content">
				<header>
					<h1>{name}</h1>
					<hr />
				</header>
				<ol>
					{ items.map((item, i) => {
						return (
							<li key={i}>
								<a style={style.link} target="_blank" href={item.link}>{item.title}</a>
							</li>
							)
						})
					}
				</ol>
			</div>
		)
	}
}

const style = {
	link: {
		border: 'none',
		color: 'blue'
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

	}
}

export default connect(stateToProps, dispatchToProps)(Feed)

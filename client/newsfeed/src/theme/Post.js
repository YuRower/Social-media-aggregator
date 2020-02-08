import React, { Component } from 'react'

class Post extends Component {
	render(){
		return (
			<article>
				<a href="#" className="image"><img src="https://placehold.it/416x256" alt="" /></a>
				<h3>Interdum aenean</h3>
				<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
				<ul className="actions">
					<li><a href="#" className="button">More</a></li>
				</ul>
			</article>
	    )
	}
}

export default Post
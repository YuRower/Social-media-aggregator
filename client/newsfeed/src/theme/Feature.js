import React, { Component } from 'react'

class Feature extends Component {
	render(){
		return (
            <article>
                <span className={this.props.icon}></span>
                <div className="content">
	                <h3>Portitor ullamcorper</h3>
	                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
            </article>
	    )
	}
}

export default Feature
import React, { Component } from 'react'
import Footer from './Footer'
import Search from './Search'
import Nav from './Nav'
import MiniPost from './MiniPost'

class Sidebar extends Component {
	render(){
		return (
		      <div id="sidebar">
            <div className="inner">
                <Search />
                <Nav />

                <section>
                  <header className="major">
                    <h2>Ante interdum</h2>
                  </header>
                  <div className="mini-posts">
                    <MiniPost />
                    <MiniPost />
                  </div>
                  <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                  </ul>
                </section>

                <section>
                  <header className="major">
                    <h2>Get in touch</h2>
                  </header>
                  <p>Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                  <ul className="contact">
                    <li className="fa-envelope-o"><a href="#">information@untitled.tld</a></li>
                    <li className="fa-phone">(000) 000-0000</li>
                    <li className="fa-home">1234 Somewhere Road #8254<br />
                    Nashville, TN 00000-0000</li>
                  </ul>
                </section>

                <Footer>
                  <p className="copyright">
                    &copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. 
                    Design: <a href="https://html5up.net">HTML5 UP</a>.
                  </p>
                </Footer>

            </div>
          </div>

	    )
	}
}

export default Sidebar
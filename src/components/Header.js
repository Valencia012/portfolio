import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/thumbs/Valencia3.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Valencia Mckinney</strong>, a super simple person with a strong head on my shoulders! I am a person with an attitude with lots to learn!!!<br />
                    If you got any advice or helpfull thoughts,  I'm always willing to listen and learn with open eyes and ears...<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

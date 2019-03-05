import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/markmcculloh.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="Mark McCulloh" /></a>
                    <h1><strong>Hi, I'm Mark </strong><br />
                     I'm a software engineer <br />
                     always looking for new challenges </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

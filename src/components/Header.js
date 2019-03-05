import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/markmcculloh.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="Mark McCulloh" /></a>
                    <h1><strong>Mark McCulloh </strong><br />
                     Software Engineer and Architect <br />
                     Always Looking for New Challenges </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

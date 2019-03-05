import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <div className="4u 12u$(small)">
                        <ul className="labeled-icons">
                            <li>
                                <h3 className="icon fa-github"><span className="label">Github</span></h3>
                                <a href="https://github.com/MarkMcCulloh">/MarkMcCulloh</a>
                            </li>
                            <li>
                                <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                <a href="mailto:Mark.McCulloh@gmail.com">Mark.McCulloh@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Footer

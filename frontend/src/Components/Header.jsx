import React from "react"
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {
    const headStyle = {
        backgroundColor:bgColor, color:textColor
    }
    return (
        <header style={headStyle}>
            {/* <a href='/'>Home</a>
            <a href='inventory'>Inventory</a> */}
            <div className="container">
                <h1> Inventory Manager </h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Hello',
    bgColor: 'rgb(0,0,0,1)',
    textColor: 'pink'
}

Header.propTypes = {
    text: PropTypes.string,
}


export default Header
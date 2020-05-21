import React from 'react'


export default class Photo extends React.Component {

    render() {
        return(
            <div>
                Photo!
                {this.props.name}
            </div>
        )
    }
}

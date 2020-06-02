import React from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../Context'
import './TopNavBar.css'
import TokenService from '../../services/token-service'
import AudioPlayer from '../AudioPlayer/AudioPlayer'

class TopNavBar extends React.Component {

    static contextType = DataContext;



    render() {

// let className = `${this.context.state.colorChosen}`
// if(this.context.state.colorChosen === 'yellow') {
//     className = className += 'new_text_color'
// }
// style={{backgroundColor: className}}

        return (



            <nav className="top-nav-bar">
                <Link to='/' >Home</Link>
                <div className="spacer"></div>
                <AudioPlayer />
            </nav>
                
                
          
        )
    }
}

export default TopNavBar;
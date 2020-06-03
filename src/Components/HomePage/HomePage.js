import React from 'react'

import ColorPicker from '../ColorPicker/ColorPicker'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import {InfoBlock} from './InfoBlock'
import { DataContext } from '../../Context'

class HomePage extends React.Component {


    render() {

        
        return (
            <div>
                <Header />
                <ColorPicker />
                <InfoBlock/>
                <Footer />
            </div>
        )
    }
}

export default HomePage;
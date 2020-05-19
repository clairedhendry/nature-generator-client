import React from 'react'
import TopNavBar from '../Nav/TopNavBar'
import ColorPicker from '../ColorPicker/ColorPicker'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import InfoSections from './InfoSections'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <TopNavBar/>
                <Header />
                <ColorPicker/>
                <InfoSections/>
                <Footer />
            </div>
        )
    }
}

export default HomePage;
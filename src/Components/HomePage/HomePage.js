import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import Footer from '../Footer/Footer';
import InfoBlock from './InfoBlock';


class HomePage extends React.Component {

    render() {
        return (
            <div>
                <InfoBlock />
                <ColorPicker test={false} />
                <Footer />
            </div>
        )
    }
};

export default HomePage;
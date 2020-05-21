import React from 'react'
import './InfoSections.css'

class InfoSections extends React.Component {

    render() {
        return (
            <div className="homepage-information-content">
                <section>
                    <div className="see-and-hear-info">
                    <h3>See and Hear</h3>
                    <p>Experience the sights and sounds of a forest</p>
                    <p>Or a seaside beach</p>
                    </div>
                </section>
                <section>
                    <div className="slideshow-info">
                    <p>View a slideshow of randomly generated images based on your color choice</p>
                    <p>Listen to a matching soundscape</p>
                    </div>
                </section>
                <section>
                    <div className="register-info">
                    <h3>Add your own</h3>
                    <p>Register an account to add your own images by color</p>
                    <p>See your images incorporated into your slideshow</p>
                    <p>Sign up <a href="./registration">here</a></p>
                    </div>
                </section>
            </div>
        )
    }
}

export default InfoSections;
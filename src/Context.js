import React from 'react';
import ColorData from './ColorData/ColorData'

export const DataContext = React.createContext();

export class DataProvider extends React.Component {

state = {
    colorChosen: '',
    categoryChosen: '',
    user: {
        userName: 'demo-user',
        password: 'demo-password',
        email: 'demo@email.com'
    },
    loggedIn: false,
}


updateColorChosen = (value) => {

    // const category = ColorData.find(item => {
    //     if(item.color === value) 
    //         return item.category[(Math.floor(Math.random() * item.category.length + 0))]})

    const colorItem = ColorData.imageCategories.find(item => item.color === value);
    const category = colorItem.category[(Math.floor(Math.random() * colorItem.category.length + 0))];

    this.setState({
        colorChosen: value,
        categoryChosen: category
    })
}



render() {
    return (
        <DataContext.Provider
            value={{
                state: {
                    ...this.state
                },
                actions: {
                    updateColorChosen: this.updateColorChosen
                }
            }}>
                {this.props.children}
            </DataContext.Provider>
    )
};
}

export const DataConsumer = DataContext.Consumer;
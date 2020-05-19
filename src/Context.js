import React from 'react';

export const DataContext = React.createContext();

export class DataProvider extends React.Component {

state = {
    colorChosen: '',
    categoryChosen: '',
    user: {
        username: 'demo-user',
        password: 'demo-password',
        email: 'demo@email.com'
    },
    loggedIn: false
}

render() {
    return (
        <DataContext.Provider
            value={{
                state: {
                    ...this.state
                },
                actions: {}
            }}>
                {this.props.children}
            </DataContext.Provider>
    )
};
}

export const DataConsumer = DataContext.Consumer;
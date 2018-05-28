import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state= { loggedIn: null };
    componentWillMount(){
        firebase.initializeApp({  //firebase
            apiKey: 'AIzaSyA6IKF2Q29qnFLqv-4qpW2EaZa9wGmRSCs',
            authDomain: 'auth-5fc5e.firebaseapp.com',
            databaseURL: 'https://auth-5fc5e.firebaseio.com',
            projectId: 'auth-5fc5e',
            storageBucket: 'auth-5fc5e.appspot.com',
            messagingSenderId: '266352992755'
        });
        //whether user logged in
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true }); 
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent(){  
        switch(this.state.loggedIn){
            case true: //로그인 하고있다면 로그아웃버튼 보여줌
                return (
                    //로그인한 유저를 로그아웃시키기
                    <CardSection><Button onPress={() => firebase.auth().signOut()}>
                        Log Out
                    </Button></CardSection>  
                );
            case false:
                return <LoginForm />;
            default:
                return <View><Spinner size="large" /></View>;
       }
    }

    render(){
        return (
            //flex:1 - centered 하기 위해
            <View style={{ flex: 1 }}>
                <Header headerText="Authentication" /> 
                {this.renderContent()}
            </View>
        );
    }
}


export default App;
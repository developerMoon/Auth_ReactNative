import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common'; //common폴더에서 다 같이 import

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress(){
        const { email, password }=this.state;

        this.setState({ error: '', loading: true }); //default : false -> true
        
        //signin - success / fail (create an account) ->success / fail(show an error)
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this)) //로그인 성공 시
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password) //returns promise
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail(){
        this.setState({ error: 'Authentication Failed', loading: false });
    }

    onLoginSuccess(){ //로그인 성공하면 이메일과 비밀번호 clear
        this.setState({
            email: '',
            password: '',
            loading: false, //spinner없앰
            error: ''
        });
    }

    renderButton(){
        if (this.state.loading){ //true라면
            return <Spinner size="small" />; //login버튼 누르면 spinner가 로그인한다고 돔
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com" //how form of input should be
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} 
                        //argument: call it what you want, and refactor it as it has same name                        
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        //user가 입력한 password(이걸 text, field, 뭐라하든 상관없음) 을 password자리에 넣기
                    />
                </CardSection> 
                
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>                 
            </Card>
        );
    }
}

const styles= {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;

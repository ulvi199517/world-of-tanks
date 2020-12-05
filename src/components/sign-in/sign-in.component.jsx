import React from 'react';
import './sign-in.styles.scss';
import {FaFacebook, FaGoogle, FaEnvelope, FaGithub} from 'react-icons/fa';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
        auth, 
        signInWithGoogle,
        signInWithFacebook,
        signInWithGithub
    } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }catch(error){
            console.log(error);
        }
    }
    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span className='subtitle'> Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        label='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required 
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        label='Password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required 
                    />
                    <CustomButton type='submit'><FaEnvelope className='envelope-icon'/> Sign in</CustomButton>
                    <span className='divider'>or</span>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn><FaGoogle className='google-icon'/> Sign in with Google</CustomButton>
                    <CustomButton onClick={signInWithFacebook} isFacebookSignIn><FaFacebook className='facebook-icon'/> Sign in with Facebook</CustomButton>
                    <CustomButton onClick={signInWithGithub} isGithubSignIn><FaGithub className='github-icon'/> Sign in with Github</CustomButton>
                </form>
            </div>
        );
    }
}
export default SignIn;
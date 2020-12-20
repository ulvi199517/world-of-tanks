import React from 'react';
import './sign-in.styles.scss';
import {FaFacebook, FaGoogle, FaEnvelope, FaGithub} from 'react-icons/fa';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {
        googleSignInStart, 
        emailSignInStart,
        facebookSignInStart,
        githubSignInStart
    } from '../../redux/user/user.actions';
import {connect} from 'react-redux';

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
        const {emailSignInStart} = this.props;
        emailSignInStart(email, password);
    }
    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }
    render(){
        const {googleSignInStart, facebookSignInStart, githubSignInStart} = this.props;
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
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn><FaGoogle className='google-icon'/> Sign in with Google</CustomButton>
                    <CustomButton type='button' onClick={facebookSignInStart} isFacebookSignIn><FaFacebook className='facebook-icon'/> Sign in with Facebook</CustomButton>
                    <CustomButton type='button' onClick={githubSignInStart} isGithubSignIn><FaGithub className='github-icon'/> Sign in with Github</CustomButton>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
    facebookSignInStart: () => dispatch(facebookSignInStart()),
    githubSignInStart: () => dispatch(githubSignInStart())

})
export default connect(null, mapDispatchToProps)(SignIn);
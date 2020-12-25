import React, {useState} from 'react';
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

const SignIn = ({emailSignInStart, googleSignInStart, facebookSignInStart, githubSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({ 
        email: '', 
        password: ''
    });
    const {email, password} = userCredentials;
    
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }
    const handleChange = event => {
        const {value, name} = event.target;

        setUserCredentials({ ...userCredentials, [name]: value})
    }

    return(
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
            <span className='subtitle'> Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email'
                    type='email'
                    label='Email'
                    value={email}
                    handleChange={handleChange}
                    required 
                />
                <FormInput 
                    name='password'
                    type='password'
                    label='Password'
                    value={password}
                    handleChange={handleChange}
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
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
    facebookSignInStart: () => dispatch(facebookSignInStart()),
    githubSignInStart: () => dispatch(githubSignInStart())

})
export default connect(null, mapDispatchToProps)(SignIn);
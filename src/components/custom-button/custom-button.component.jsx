import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, inverted, isGoogleSignIn, isFacebookSignIn, isGithubSignIn, ...otherProps}) => (
    <button className={`
    ${isGoogleSignIn ? 'google-sign-in' : ''} 
    ${isFacebookSignIn ? 'facebook-sign-in' : ''} 
    ${isGithubSignIn ? 'github-sign-in' : ''} 
    ${inverted ? 'inverted' : ''} 
    custom-button`} {...otherProps}>
        {children}
    </button>
);
export default CustomButton;
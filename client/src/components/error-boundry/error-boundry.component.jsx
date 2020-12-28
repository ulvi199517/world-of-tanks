import React from 'react';
import './error-boundry.styles.scss';

class ErrorBoundry extends React.Component {
    constructor(){
        super();

        this.state = {
            hasErrored: false
        }
    }
    static getDerivedStateFromError(error){
        //process the error
        return {hasErrored: true}
    }
    componentDidCatch(error, info){
        console.log(error)
    }

    render(){
        if(this.state.hasErrored){
            return (
                <div className='error-image-overlay'>
                    <div className='error-image' />
                    <h2 className='error-image-text'>Sorry, this page is broken</h2>
                </div>
            )
        }
        return this.props.children;
    }
};
export default ErrorBoundry;
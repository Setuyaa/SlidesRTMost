
import React, { useState } from 'react';
import '../css/Button.scss'
import { Link } from 'react-router-dom';
import { MODAL_TRANSITION_TIMEOUT } from '../constrains/constrains';



type Props = {
    disabled?: boolean;
    extraClasses: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    defaultMessage?: React.ReactNode;
    onGetStarted?: () => void;   
}

export default class Button extends React.PureComponent<Props> {
    public static defaultProps: Partial<Props> = {
        defaultMessage: 'Save',
        disabled: false,
        onGetStarted: () => null,
    };
    state = {
        transition: 'outToLeft' as 'outToLeft',
    };

    handleOnGetStartedClick = () => {

        this.setState({ transition: 'outToLeft' });
        
        setTimeout(() => {
            if (this.props.onGetStarted) {
                this.props.onGetStarted(); 
            }
        }, MODAL_TRANSITION_TIMEOUT);
    };

    public render() {
        return (
            <Link to='https://team.rtinform.ru' style={{ textDecoration: 'none' }}className={`primary-button`} onClick={this.handleOnGetStartedClick} >
            <span style={{ display: 'block' }}>
                {this.props.defaultMessage}
            </span>
        </Link>
    );
    }


}
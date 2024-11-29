// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import classNames from 'classnames';
import React from 'react';

import '../css/Button.scss';
import '../css/CarouselButton.scss';

export enum ButtonDirection {
    NEXT = 'next',
    PREV = 'prev',
}

type CarouselButtonProps = {
    direction: ButtonDirection;
    disabled?: boolean;
    onClick?: () => void;
};

function CarouselButton({
    direction = ButtonDirection.NEXT,
    disabled = false,
    onClick = () => null,
}: CarouselButtonProps) {
    const handleOnClick = () => {
        onClick();
    };

    return (
        <button
            id={`${direction}CarouselButton`}
            className={classNames(
                'CarouselButton',
                'icon-button icon-button-small',
                {
                    disabled,
                },
            )}
            disabled={disabled}
            onClick={handleOnClick}
        >
            {/* <i className={direction === ButtonDirection.PREV ? 'icon-chevron-left' : 'icon-chevron-right'}/>
          
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"> 
            direction === ButtonDirection.PREV ? 
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            </i>

            <i> */}
            <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                        d={
                            direction === ButtonDirection.PREV
                                ? "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
                                : "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        }
                    />
                </svg>
            </i>
        </button>
    );
}

export default CarouselButton;
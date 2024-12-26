// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import classNames from 'classnames';
import React from 'react';

import '../css/WelcomeScreenSlide.scss';
import '../Button/index';

type WelcomeScreenSlideProps = {
    title: string | React.ReactElement;
    title2?: string | React.ReactElement;
    subtitle: string | React.ReactElement;
    image: React.ReactNode;
    isMain?: boolean;
    button?: React.ReactElement;
};
const formatText = (text: string): string => {
    return text.replace(/{br}/g, '&nbsp;');
};
const WelcomeScreenSlide = ({
    title,
    title2,
    subtitle,
    image,
    isMain,
    button,
}: WelcomeScreenSlideProps) => (
    <div
        className={classNames(
            'WelcomeScreenSlide',
            {
                'WelcomeScreenSlide--main': isMain,
            },
        )}
    >
                <div className='WelcomeScreenSlide__ti'>
        <div className='WelcomeScreenSlide__image'>
            {image}
        </div>
            <div className='WelcomeScreenSlide__title'>
                {title}
            </div>
            <div className='WelcomeScreenSlide__title'>
                {title2}
            </div>
        </div>
        <div className='WelcomeScreenSlide__subtitle'>
            {subtitle}
        </div>
        <div className='WelcomeScreenSlide__button'>
            {button}
        </div>
    </div>
);

export default WelcomeScreenSlide;
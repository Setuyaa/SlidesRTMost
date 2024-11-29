// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import classNames from 'classnames';
import React from 'react';

import '../css/WelcomeScreenSlide.scss';

type WelcomeScreenSlideProps = {
    title: string| React.ReactElement;
    subtitle: string | React.ReactElement;
    image: React.ReactNode;
    isMain?: boolean;
    darkMode?: boolean;
};
const formatText = (text: string): string => {
    return text.replace(/{br}/g, '\n');
    };
const WelcomeScreenSlide = ({
    title,
    subtitle,
    image,
    isMain,
    darkMode,
}: WelcomeScreenSlideProps) => (
    <div
        className={classNames(
            'WelcomeScreenSlide',
            {
                'WelcomeScreenSlide--main': isMain,
                'WelcomeScreenSlide--darkMode': darkMode,
            },
        )}
    >
        <div className='WelcomeScreenSlide__image'>
            {image}
        </div>
        <div className='WelcomeScreenSlide__title'>
            {typeof title === 'string' ? <pre>{formatText(title)}</pre> : title}
        </div>
        <div className='WelcomeScreenSlide__subtitle'>
            {typeof subtitle === 'string' ? <pre>{formatText(subtitle)} </pre> : subtitle}
        </div>
    </div>
);

export default WelcomeScreenSlide;
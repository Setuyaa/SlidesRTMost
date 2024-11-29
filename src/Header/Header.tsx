// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import classNames from 'classnames';
import React from 'react';

import Logo from '../Logo/logo';

import '../css/Header.scss';

type HeaderProps = {
    alternateLink?: React.ReactElement;
    darkMode?: boolean;
}

const Header = ({
}: HeaderProps) => (
    <div
        className={classNames(
            'Header',
        )}
    >
        <div className='Header__main'>
            <div className='Header__logo'>
                <Logo/>
            </div>
        </div>
    </div>
);

export default Header;
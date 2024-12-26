// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import classNames from 'classnames';
import React, { useState, useEffect, useMemo } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

import { MODAL_TRANSITION_TIMEOUT } from '../constrains/constrains';
import robo1 from '../svg/robo1.svg';
import time2 from '../svg/time2.svg';
import collaborate3 from '../svg/collaborate3.svg';
import integrate4 from '../svg/integrate4.svg';
import safety5 from '../svg/safety5.svg';
import Carousel from '../Carousel';
import Header from '../Header';
import Footer from '../footer/footer';
// import LoadingBackground from './LoadingScreen/LoadingBackground';

import WelcomeScreenSlide from './WelcomeScreenSlide';

import '../css/Button.scss';
import '../css/WelcomeScreen.scss';
import '../css/LoadingScreen.css';
import Button from '../Button';
import { BrowserRouter as Router } from 'react-router-dom';


type WelcomeScreenProps = {
    onGetStarted?: () => void;
};

function WelcomeScreen({
    onGetStarted = () => null,
}: WelcomeScreenProps) {

    const [transition, setTransition] = useState<'outToLeft'>();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true);
    }, []);

    const slides = [
        {
            key: 'welcome',
            title: 'Начните совместную работу в',
            title2: 'РТ Мост!',
            subtitle: 'РТ Мост – это корпоративная отечественная платформа для совместной работы над проектами. Безопасная, гибкая и интегрируемая с любыми инструментами.',
            subtitle2: 'РТ Мост – это корпоративная отечественная платформа для совместной работы над проектами. Безопасная, гибкая и интегрируемая с любыми инструментами.',
            image: (
                <img
                    src={robo1}
                    draggable={false}
                />
            ),
            main: true,
        },
        {
            key: 'economy',
            title: 'Экономьте время  и автоматизируйте свой бизнес.',
            subtitle: 'РТ Мост позволяет централизованно управлять проектами и отслеживать своевременное выполнение всех задач. Автоматизируйте рутинные процессы с помощью предустановленных сценариев и посвятите свое время тому, что действительно важно!',
            subtitle2: 'РТ Мост позволяет централизованно управлять проектами и отслеживать своевременное выполнение всех задач.',
            image: (
                <img
                    src={time2}
                    draggable={false}
                />
            ),
        },
        {
            key: 'collaborate',
            title: 'Сотрудничайте в режиме реального времени',
            subtitle: 'Обменивайтесь файлами и фрагментами кода, создавайте тематические каналы для разных отделов и задач, совершайте личные и групповые видеозвонки. И все это – не выходя из приложения.',
            subtitle2: 'Обменивайтесь файлами и фрагментами кода, создавайте тематические каналы для разных отделов и задач, совершайте личные и групповые видеозвонки.',
            image: (
                <img className='collaborate'
                    src={collaborate3}
                    draggable={false}
                />
            ),
        },
        {
            key: 'integrate',
            title: 'Подключайте привычные инструменты',
            subtitle: 'РТ Мост поддерживает интеграцию со многими популярными сервисами, такими как GitHub, GitLab, Jira, ServiceNow.',
            subtitle2: 'РТ Мост поддерживает интеграцию со многими популярными сервисами, такими как GitHub, GitLab, Jira, ServiceNow.',
            image: (
                <img className='integrate'
                    src={integrate4}
                    draggable={false}
                />
            ),
        },
        {
            key: 'safety',
            title: 'Общайтесь безопасно',
            subtitle: 'РТ Мост поддерживает мультифакторную авторизацию для защиты рабочего пространства. Развертывание мессенджера на VPS (виртуальном выделенном сервере) обеспечивает высокую степень конфиденциальности данных.',
            subtitle2: 'РТ Мост поддерживает мультифакторную авторизацию для защиты рабочего пространства.',
            image: (
                <img
                    src={safety5}
                    draggable={false}
                />
            ),
            button: (
                <Router>
                    <Button
                        extraClasses='primary-button'
                        defaultMessage='Перейти к работе'
                    />
                </Router>
            ),
        },
    ];

    const handleOnGetStartedClick = () => {
        setTransition('outToLeft');

        setTimeout(() => {
            onGetStarted();
        }, MODAL_TRANSITION_TIMEOUT);
    };

    return (
        <div
            className={classNames(
                'LoadingScreen',
                'WelcomeScreen',
            )}
        >
            <Header />
            {showContent && (
                <div className={classNames('WelcomeScreen__body', transition)}>
                    <div className='WelcomeScreen__content'>
                        <Carousel
                            slides={slides.map(({ key, title, title2, subtitle, subtitle2, image, main, button }) => ({
                                key,
                                content: (
                                    <WelcomeScreenSlide
                                        key={key}
                                        title={title}
                                        title2={title2}
                                        subtitle={subtitle}
                                        subtitle2={subtitle2}
                                        image={image}
                                        isMain={main}
                                        button={button}
                                    />
                                ),
                            }))}
                        />

                    </div>
                </div>
            )}
            <Footer />
            {/* <div className='WelcomeScreen__footer' /> */}
        </div>
    );
}

export default WelcomeScreen;
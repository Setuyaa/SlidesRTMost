// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import classNames from 'classnames';
import React, { useState, useEffect, useMemo } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';

import { MODAL_TRANSITION_TIMEOUT } from '../constrains/constrains';
import robo1  from '../svg/robo1.svg';
import time2 from '../svg/time2.svg';
import collaborate3 from '../svg/collaborate3.svg';
import integrate4 from '../svg/integrate4.svg';
import safety5 from '../svg/safety5.svg';
import Carousel from '../Carousel';
import Header from '../Header';
// import LoadingBackground from './LoadingScreen/LoadingBackground';

import WelcomeScreenSlide from './WelcomeScreenSlide';

import '../css/Button.scss';
import '../css/WelcomeScreen.scss';
import '../css/LoadingScreen.css';

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
            title: 'Начните совместную {br}работу в РТ Мост!',
            subtitle: 'РТ Мост – это корпоративная отечественная платформа {br}для совместной работы над проектами. Безопасная, гибкая {br}и интегрируемая с любыми инструментами.', 
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
            title: 'Экономьте время {br} и автоматизируйте свой бизнес.', 
            subtitle: 'РТ Мост позволяет централизованно управлять проектами и отслеживать {br}своевременное выполнение всех задач. Автоматизируйте рутинные процессы {br}с помощью предустановленных сценариев и посвятите свое время тому, {br}что действительно важно!', 
            image: (
                <img
                    src={time2}
                    draggable={false}
                />
            ),
        },
        {
            key: 'collaborate',
            title: 'Сотрудничайте в режиме {br}реального времени',
            subtitle: 'Обменивайтесь файлами и фрагментами кода, создавайте тематические {br}каналы для разных отделов и задач, совершайте личные и групповые {br}видеозвонки. И все это – не выходя из приложения.',
            image: (
                <img
                    src={collaborate3}
                    draggable={false}
                />
            ),
        },
        {
            key: 'integrate',
            title: 'Подключайте привычные {br}инструменты',
            subtitle: 'РТ Мост поддерживает интеграцию со многими популярными {br}сервисами, такими как GitHub, GitLab, Jira, ServiceNow.',
            image: (
                <img
                    src={integrate4}
                    draggable={false}
                />
            ),
        },
        {
            key: 'safety',
            title: 'Общайтесь безопасно',
            subtitle: 'РТ Мост поддерживает мультифакторную авторизацию для защиты рабочего пространства. {br}Развертывание мессенджера на VPS (виртуальном выделенном сервере) обеспечивает {br}высокую степень конфиденциальности данных.',
            image: (
                <img
                    src={safety5}
                    draggable={false}
                />
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
                            slides={slides.map(({ key, title, subtitle, image, main }) => ({
                                key,
                                content: (
                                    <WelcomeScreenSlide
                                        key={key}
                                        title={title}
                                        subtitle={subtitle}
                                        image={image}
                                        isMain={main}
                                    />
                                ),
                            }))}
                        />
                        {/* <button
                            id='getStartedWelcomeScreen'
                            className={classNames(
                                'WelcomeScreen__button',
                                'primary-button primary-medium-button',
                            )}
                            onClick={handleOnGetStartedClick}
                        >
                            {//formatMessage({ id: 'renderer.components.welcomeScreen.button.getStarted', defaultMessage: 'Get Started' })
                            }
                        </button> */}
                    </div>
                </div>
            )}
            {/* <div className='WelcomeScreen__footer' /> */}
        </div>
    );
}

export default WelcomeScreen;
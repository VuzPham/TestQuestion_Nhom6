import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import QuestionsList from '~/components/QuestionForm/QuestionsList';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
            <Footer />
            
        </div>
    );
}

export default DefaultLayout;

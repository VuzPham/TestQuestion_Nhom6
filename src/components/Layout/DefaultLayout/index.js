import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import QuestionsList from '~/components/QuestionForm/QuestionsList';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAdd = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    return (
        <div className={cx('wrapper')}>
            <Header handleAdd={handleAdd} />
            <div className="container">
                <div className="content">
                    {children}
                    <QuestionsList 
                        isAddModalOpen={isAddModalOpen} 
                        setIsAddModalOpen={setIsAddModalOpen} 
                        onAdd={handleAdd}
                    />
                </div>
            </div>
            <Footer />
            
        </div>
    );
}

export default DefaultLayout;

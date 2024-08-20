import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import classNames from 'classnames/bind';

import styles from './Header.module.scss'
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const isAdminRoute = window.location.pathname.includes('/admin');
  
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={classNames('container-fill', cx('wrapper', { scrolled }))}>
            <div className={cx('inner')}>
               <div className="row align-items-center">
                    <div className={classNames('col-md-6 col-6', cx('logo'))}>
                            <img src={images.logo} alt='Amazing Tech'/>
                    </div>
                  
                    <div className={classNames('col-md-6 col-6', cx('actions'))}>
                        {!isAdminRoute && (
                            <>
                                <h3>Do you have any questions?</h3>
                                <Button 
                                    outline 
                                >
                                    Add questions
                                </Button>
                            </>
                        )}
                    </div>
               </div>
            </div>
        </header>
    );
}

export default Header;

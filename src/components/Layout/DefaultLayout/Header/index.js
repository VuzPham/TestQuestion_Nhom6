import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import classNames from 'classnames/bind';

import styles from './Header.module.scss'
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const isAdminRoute = window.location.pathname.includes('/admin');

    return (
        <header className={classNames('container-fill', cx('wrapper'))}>
            <div className={cx('inner')}>
               <div className={classNames('col-md-6', cx('logo'))}>
                    <img src={images.logo} alt='Amazing Tech'/>
               </div>
              
               <div className={classNames('col-md-6', cx('actions'))}>
                    {!isAdminRoute && (
                        <Button primary href={'/addquestion'} className="ml-auto d-block">
                            Add questions
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
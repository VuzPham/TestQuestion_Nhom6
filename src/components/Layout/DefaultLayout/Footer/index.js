import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import styles from './Footer.module.scss'

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={classNames('container-fill', cx('wrapper'))}>
                <div className='row'>
                    <div className={classNames('col-md-6', cx('logo'))}>
                        <img src={images.logo} alt='Amazing Tech'/>
                    </div>
                    <div className={cx('copy')}>
                        <p>&copy; {new Date().getFullYear()} Amazing Tech. All rights reserved.</p>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;
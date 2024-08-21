import 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import styles from './Footer.module.scss'

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={classNames('container-fill', cx('wrapper'))}>
            <div className={classNames('row', cx('footer-top'))}>
                <div className={classNames('col-md-4', cx('content'))}>
                    <img src={images.logoWhite} alt='Amazing Tech' className={cx('logo')} />
                    <div className={cx('info')}>
                        Amazing Tech Company delivers IT solutions and services to established companies that need tailored software for further business growth. With a deep understanding of modern technologies, 
                        transparent processes, 
                        and strong expertise in business domains, 
                        we implement comprehensive projects and deliver high-end web, mobile, IoT, and SaaS solutions.
                    </div>
                </div>
                <div className={classNames('col-md-2', cx('content'))}>
                    <h3 className={cx('title')}>Primary page</h3>
                    <div className={cx('info')}>
                       <ul>
                            <li>About Us</li>
                            <li>News</li>
                            <li>Career</li>
                            <li>Contact Us</li>
                       </ul>
                    </div>
                </div>
                <div className={classNames('col-md-2', cx('content'))}>
                    <h3 className={cx('title')}>Solutions</h3>
                    <div className={cx('info')}>
                        <ul>
                            <li>DevOps</li>
                            <li>Mobile App Development</li>
                            <li>Software Testing</li>
                            <li>Software Engineer</li>
                            <li>MVP Product Development</li>
                        </ul>
                    </div>
                </div>
                <div className={classNames('col-md-2', cx('content'))}>
                    <h3 className={cx('title')}>Products</h3>
                    <div className={cx('info')}>
                        <ul>
                            <li>TeleCRM Platform</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={classNames('row', cx('footer-bottom'))}>
                <p>&copy; {new Date().getFullYear()} Amazing Tech. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

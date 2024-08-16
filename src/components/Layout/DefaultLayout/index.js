import classNames from "classnames/bind";
import Header from "./Header";
import Footer from "./Footer";
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

function DefaultLayout({children}) {
    return ( 
        <div className={cx('wrapper')}>
            <Header/>
                <div className="container">
                    <div className="content">
                        {children}
                    </div>
                </div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;
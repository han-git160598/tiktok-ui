import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images  from "~/assets/images";

const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
           <div className={cx('logo')}>
                <img src={images.logo} alt="logo"></img>
           </div>
        </div>

    </header>;
}

export default Header;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faCloudUpload, faMessage } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { faCircleQuestion, faEarthAsia, faKeyboard } from "@fortawesome/free-solid-svg-icons";

import styles from "./Header.module.scss";
import images  from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon : <FontAwesomeIcon icon = {faEarthAsia}></FontAwesomeIcon>,
        title : 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ]
        },
    },
    {
        icon : <FontAwesomeIcon icon = {faCircleQuestion}></FontAwesomeIcon>,
        title : 'Feedback and help',
        to: '/feedback',
    },
    {
        icon : <FontAwesomeIcon icon = {faKeyboard}></FontAwesomeIcon>,
        title : 'keyboard shortcuts'
    },
]

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    // useEffect  (()=>{
    //     setTimeout(() => {
    //         setSearchResult([])
    //     }, 5000);
    // })

    //Handle
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type) {
            case 'language' :
                break;
            default:
        }
    }

    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                        <img src={images.logo} alt="logo"></img>
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render ={attrs =>(
                        <div className={cx('search-result')} tabIndex="-1">
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search acounts and videos" spellCheck={false}/>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy trigger="click" content="Upload videos" placement="bottom">
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                        </Tippy>

                    </>
                ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button  primary >Login</Button>
                        </>
                )}
                <Menu 
                    items={MENU_ITEMS}
                    onChange ={handleMenuChange}
                >
                    {currentUser ? (
                        <img className={cx('user-avatar')} alt="Nguyen Gia Han" src="" />
                    ) : (
                        <>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </>
                    ) }
                
                </Menu>
                </div>
            </div>

        </header>
    );
}

export default Header;
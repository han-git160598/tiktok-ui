import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles);


function Menu( {children, items = []} ) {
    const renderItems = () =>{
      
        return items.map((item, index) =>(
            <MenuItem key={index+1} data = {item}></MenuItem>
        ))
    }

    return ( 
        <Tippy
            visible
            interactive
            placement="bottom-end"
            render ={attrs =>(
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                       {renderItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
     );
}

export default Menu;
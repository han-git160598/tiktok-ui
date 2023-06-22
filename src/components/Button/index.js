import classNames from "classnames/bind";
import styles from './Button.module.scss';
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({ to, href, rounded=false,className, lefticon, righticon,
    primary =false,outline=false,text =false,disable=false, 
    small=false,large=false, children, onClick, ...passProps 
}) {
    let Comp = 'button';

    const props= {
        onClick,
        ...passProps,
    }
    if(to) {
        props.to = to;
        Comp = Link;
    }else if(href) {
        props.href = href;
        Comp = 'a';
    }
    if(disable) {
        delete props.onClick;
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        disable,
        small,
        large,
        rounded,
        [className] : className,
        lefticon,
        righticon,
        
    });

    return (  
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('title')}>{children}</span>
            {righticon && <span className={cx('icon')}>{righticon}</span>}

        </Comp>

    );
}

export default Button;
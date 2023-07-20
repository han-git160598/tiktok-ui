import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss';

function Image({ src, alt, className, fallback = images.noImage, ...props }, ref) {
 
  const[_fallback, setFallback] = useState('');

  const handleonError = () => {
    setFallback(fallback);
  }
  return <img className={classNames(styles.wrapper, className)} ref={ref} src={_fallback || src} alt={alt} {...props} onError={handleonError} />;
}

export default forwardRef(Image);

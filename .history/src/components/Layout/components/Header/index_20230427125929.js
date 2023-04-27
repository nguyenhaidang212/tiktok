import React from 'react';
import styles from './Header.module.scss';
import classNames from 'classname/bind';

const cx = classNames.bind(styles);

export default function Header() {
    return <header className={cx('wrapper')}></header>;
}

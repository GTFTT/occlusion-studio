import * as React from 'react';

import Styles from './styles.module.css';

interface IMenuButtonProps {
    /** Text of a button */
    label: string,
    // onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void,
}

const MenuButton: React.FunctionComponent<IMenuButtonProps> = (props) => {
    return <div className={Styles.buttonContainer}>
        <a className={Styles.button}>{ props.label }</a>
    </div>;
};

export default MenuButton;

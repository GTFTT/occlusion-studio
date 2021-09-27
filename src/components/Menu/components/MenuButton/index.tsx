import * as React from 'react';

interface IMenuButtonProps {
    /** Text of a button */
    label: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const MenuButton: React.FunctionComponent<IMenuButtonProps> = (props) => {
    return <div>
        <button onClick={ props.onClick }>{ props.label }</button>
    </div>;
};

export default MenuButton;

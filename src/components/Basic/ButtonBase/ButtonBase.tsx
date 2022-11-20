import React, {FC} from 'react';
import './style.scss'

interface props {
    type?: 'submit' | 'reset' | 'button',
    size?: 'small' | 'medium' | 'large';
    label: string;
    backgroundColor?: string;
    onClick?: () => void;
    primary?: boolean;
}

const ButtonBase: FC<props> = (
    {
        type = 'button',
        label, onClick,
        primary,
        size = 'small',
        backgroundColor,
        ...props
    }) => {
    const mode = primary ? 'button--primary' : 'button--secondary';
    return (
        <button
            type={type}
            onClick={onClick}
            className={['button-basic ', `button--${size}`, mode].join(' ')}
            style={{backgroundColor}}
            {...props}
        >{label}</button>
    );
};

export default ButtonBase;

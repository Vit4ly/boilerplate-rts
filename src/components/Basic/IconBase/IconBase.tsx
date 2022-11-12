import React, {FC, useMemo} from 'react';
import sprite from '@/assets/icons/sprites.svg'
import './index.scss'

interface T {
    title: string
    width?: string | number
    height?: string | number
}

const IconBase: FC<T> = ({title, width = 18, height = 18}) => {

    const uri = useMemo(() => {
        return `${sprite}#${title}`
    }, [title])

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            <use href={uri}></use>
        </svg>
    );
};

export default IconBase;

import React, { useState } from 'react'

export enum CardVariant {
    outlinde = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string;
    height: string;
    variant: CardVariant;
    children?: React.ReactNode;
    clickFunc: (num: number) => void;
}

const Card: React.FC<CardProps> = ({ width, height, children, variant, clickFunc }) => {

    const [state, setState] = useState(0)
    return (
        <div onClick={() => clickFunc(state)} 
         style={{
            width, height, border: variant === CardVariant.outlinde ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : ''
        }}>{children}</div>
    )
}

export default Card
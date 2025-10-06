/* Componente contenedor con children
Ruta sugerida: src/components/Card.tsx

Qué hacer: Crea Card que recibe props como title y children, y renderiza el title seguido del contenido pasado por children.
Hook o concepto a usar: Composición mediante children y props.
Criterio de aceptación: Se puede colocar un ActionButton dentro del Card y se muestra title y children correctamente.*/

import type { FC, ReactNode } from 'react';

interface CardProps {
    title?: string;
    children?: ReactNode;
}

const Card: FC<CardProps> = ({ title = 'Card', children }: CardProps) => {
    return (
        <div className='card'>
            <div className='header-card'>
                <h1>{title}</h1>
            </div>

            <div className='card-body'>
                <div className='children-card'>{children}</div>
            </div>

            <div className='card-footer'>
                <button type='button'>Something!</button>
            </div>
        </div>
    );
};

export default Card;

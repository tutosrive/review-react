/* Botón con variante primary y secondary
Ruta sugerida: src/components/StyledButton.tsx
Qué hacer: Crea StyledButton que recibe props como label y variant (con valores primary o secondary), y aplica una clase CSS diferente según el variant.
Hook o concepto a usar: Props tipadas en TypeScript.
Criterio de aceptación: Cambiar variant en el padre cambia la clase aplicada al botón. */

import type { FC } from 'react';

interface StyledButtonProps {
    label?: string;
    variant: 'primary' | 'secondary';
}

const StyledButton: FC<StyledButtonProps> = ({ label = 'Click Me!', variant }: StyledButtonProps) => {
    return (
        <button type='button' className={variant}>
            {label}
        </button>
    );
};

export default StyledButton;

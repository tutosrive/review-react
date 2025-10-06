/* Botón simple que emite evento
Ruta sugerida: src/components/ActionButton.tsx

Qué hacer: Crea un componente ActionButton que recibe props como label y onAction, y al hacer click, llama a onAction.

Acción concreta a implementar: onAction incrementa un contador numérico que vive en el componente padre; el contador sube en uno por cada click.
Hook o concepto a usar: Props, eventos DOM y lifting state (levantar el estado al padre).

Criterio de aceptación: El contador mostrado en el padre aumenta en uno por cada click del ActionButton.

Pregunta de entrevista: ¿Por qué pasar funciones por props y qué ventajas tiene levantar el estado al padre?
Answer: Because is so good practice receive a callback from father via prop and fuck */

import type { FC } from 'react';

interface ActionButtonProps {
    label?: string;
    onAction: () => void;
}

const ActionButton: FC<ActionButtonProps> = ({ label = 'Click Me!', onAction }) => {
    return (
        <button type='button' onClick={onAction}>
            {label}
        </button>
    );
};

export default ActionButton;

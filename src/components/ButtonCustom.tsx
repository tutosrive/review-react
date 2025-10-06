import type React from 'react';

/* Create the interface with the props! */
interface ButtonCustomProps {
    // The Button Text!
    label?: string;

    // I wanna get a function/callback!
    callback?: () => void;
}

// Create the component!

const ButtonCustom: React.FC<ButtonCustomProps> = ({ label, callback }: ButtonCustomProps) => {
    // Validate if i get a callback
    const caller = (): void => {
        if (callback) {
            // Try call the callback! think that!
            callback();
        } else {
            console.log("I don't receive a callback!");
        }
    };
    const localLabel = label ?? 'Click Me!';

    // Return the component!
    return <button onClick={caller}>{localLabel}</button>;
};

// Export to can IMPORT
export default ButtonCustom;

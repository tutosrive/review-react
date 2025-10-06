import { useState, type ReactNode } from 'react';
import './App.css';
import ActionButton from './components/ActionButton';
import StyledButton from './components/StyledButton';
import Card from './components/Card';
import Separator from './components/Separator';

function App() {
    const [count1, setCount1] = useState(0);

    const handleClickActionButton = (): void => {
        setCount1((current) => current + 1);
    };

    // For excersice N°3
    const actionButton1 = (): ReactNode => {
        return <ActionButton onAction={handleClickActionButton} />;
    };

    return (
        <>
            {/* Excersice N°1: Reactive count */}
            <ActionButton label={`Clicks: ${count1}`} onAction={handleClickActionButton} />

            <Separator />

            {/* Excersice N°2: Styled button */}
            <StyledButton label='primary' variant='primary' />
            <StyledButton label='secondary' variant='secondary' />

            <Separator />

            {/* Excersice N°3: Component Container */}
            <Card children={actionButton1()} />

            {/* Pass the children like content... not as prop */}
            <Card>
                <ActionButton onAction={handleClickActionButton} />
            </Card>

            <Card />
        </>
    );
}

export default App;

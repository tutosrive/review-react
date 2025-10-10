import { useState } from 'react';
import ActionButton from '../components/ActionButton';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
    const [count1, setCount1] = useState(0);

    const handleClickActionButton = (): void => {
        setCount1((current) => current + 1);
    };

    // By now, I repeat the Footer and Header components, after I will use the Layout structure...

    return (
        <>
            <Header />

            <main>
                <article>
                    <p>
                        This is my React Review to remember all of <strong>React</strong>
                    </p>
                </article>

                {/* Excersice N°1: Reactive count */}
                <ActionButton label={`Clicks: ${count1}`} onAction={handleClickActionButton} />
            </main>

            <Footer />
        </>
    );
}

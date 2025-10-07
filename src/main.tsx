import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';

export function Loading() {
    return <div>Loading...</div>;
}

createRoot(document.getElementById('root')!).render(
    <Router basename='/' future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Suspense fallback={<Loading />}>
            <App />
        </Suspense>
    </Router>
);

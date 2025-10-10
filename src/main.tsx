import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode, Suspense } from 'react';
import Loader from './components/Loader.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router basename='/' future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Suspense fallback={<Loader />}>
                <App />
            </Suspense>
        </Router>
    </StrictMode>
);

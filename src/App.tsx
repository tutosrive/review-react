import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './routers/router';

function App() {
    return (
        <>
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <Routes>
                    {routes.map((routes, index) => {
                        const { path, component: Component } = routes;
                        return <Route key={index} path={path} element={<Component />} />;
                    })}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

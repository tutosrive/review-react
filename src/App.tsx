import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './routers/router';

function App() {
    return (
        <>
            <Routes>
                {routes.map((route, index) => {
                    const { path, component: Component } = route;
                    return <Route key={index} path={path} element={<Component />} />;
                })}
            </Routes>
        </>
    );
}

export default App;

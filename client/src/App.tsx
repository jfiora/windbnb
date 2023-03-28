import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppRoutes } from './routes/Routes';

function App() {
    return (
        <div className='App'>
            <Router>
                <AppRoutes />
            </Router>
        </div>
    );
}

export default App;

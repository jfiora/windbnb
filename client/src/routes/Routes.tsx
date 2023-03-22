import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
} from 'react-router-dom';
import StaysHomePage from '../pages/StaysHomePage';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<StaysHomePage />}></Route>
            <Route path='*' element={<Navigate to='/' replace />}></Route>
        </Routes>
    );
};

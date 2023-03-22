import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
} from 'react-router-dom';
import Stays from '../components/Stays/Stays';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Stays />}></Route>
            <Route path='*' element={<Navigate to='/' replace />}></Route>
        </Routes>
    );
};

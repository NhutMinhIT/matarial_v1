import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import { CustomerProvider } from './Context/CustomerContext';

import Create from './pages/Create';
function App() {
    return (
        <CustomerProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/create' element={<Create />} />
                </Routes>
            </BrowserRouter>
        </CustomerProvider>

    )
}
export default App;